<template>
  <div class="container">
    <nav class="mt-2">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/" class="text-primary">首頁</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/products" class="text-primary">線上訂餐</RouterLink>
        </li>
        <li class="breadcrumb-item">填寫訂單資訊</li>
      </ol>
    </nav>
    <main class="my-4">
      <!-- <VueLoading v-model:active="isLoading" /> -->
      <div class="row justify-content-center mb-10">
        <div class="col-3 border-bottom border-5 border-primary">
          <div class="d-flex flex-column align-items-center">
            <div
              class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1"
              style="width: 20px; height: 20px"
            >
              1
            </div>
            <p class="text-primary mb-2 fw-bold">填寫資料</p>
          </div>
        </div>
        <div class="col-3 border-bottom border-5 border-primary">
          <div class="d-flex flex-column align-items-center">
            <div
              class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1"
              style="width: 20px; height: 20px"
            >
              2
            </div>
            <p class="text-primary mb-2 fw-bold">確認付款</p>
          </div>
        </div>
        <!-- v-if="!order.is_paid" -->
        <div v-if="!order.is_paid" class="col-3 border-bottom border-5 border-gray">
          <div class="d-flex flex-column align-items-center">
            <div
              class="rounded-circle bg-gray-3 text-white d-flex align-items-center justify-content-center mb-1"
              style="width: 20px; height: 20px"
            >
              3
            </div>
            <p class="text-gray-3 mb-2 fw-bold">完成訂購</p>
          </div>
        </div>
        <!-- 付款後 3 -->
        <div v-else class="col-3 border-bottom border-5 border-primary">
          <div class="d-flex flex-column align-items-center">
            <div
              class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mb-1"
              style="width: 20px; height: 20px"
            >
              3
            </div>
            <p class="text-primary mb-2 fw-bold">完成訂購</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center flex-lg-row-reverse">
        <section class="col-lg-5 mb-5 mb-lg-0 ms-lg-3">
          <div class="card border-0 bg-light-green py-3 p-lg-4">
            <div v-if="!order.is_paid" class="card-body">
              <h2 class="fs-5 fs-lg-4 mb-4">訂單連絡資訊</h2>
              <form @submit.prevent="payOrder(order.id)">
                <table class="table align-middle bg-light-green" style="table-layout: fixed">
                  <tbody class="info">
                    <tr>
                      <td class="p-md-3 border-0">付款狀態</td>
                      <td class="p-md-3 border-0">
                        <span class="text-danger">尚未付款</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="p-md-3 border-0">訂單金額</td>
                      <td class="p-md-3 border-0">
                        NT${{ $filters.currency(order.total + shipping) }}
                      </td>
                    </tr>
                    <tr>
                      <td class="p-md-3 border-0">訂單編號</td>
                      <td class="p-md-3 border-0">{{ order.id }}</td>
                    </tr>
                    <tr>
                      <td class="p-md-3 border-0">訂單成立日期</td>
                      <td class="p-md-3 border-0">
                        {{ new Date(order.create_at * 1000).toLocaleDateString() }}
                      </td>
                    </tr>
                    <tr>
                      <td class="p-md-3 border-0">信箱</td>
                      <td class="p-md-3 border-0">{{ order.user?.email }}</td>
                    </tr>
                    <tr>
                      <td class="p-md-3 border-0">姓名</td>
                      <td class="p-md-3 border-0">{{ order.user?.name }}</td>
                    </tr>
                    <tr>
                      <td class="p-md-3 border-0">手機</td>
                      <td class="p-md-3 border-0">{{ order.user?.tel }}</td>
                    </tr>
                    <tr>
                      <td class="p-md-3 border-0">外送地址</td>
                      <td class="p-md-3 border-0">{{ order.user?.address }}</td>
                    </tr>
                    <tr>
                      <td class="p-md-3 border-0">訂單備註</td>
                      <td class="p-md-3 border-0">{{ order.message ? order.message : '無' }}</td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit" class="btn btn-secondary w-100">確認付款</button>
              </form>
            </div>
            <div v-else class="card-body">
              <div class="text-center mb-2">
                <i class="bi bi-cart-check text-success"></i>
              </div>
              <h2 class="fs-5 fs-lg-4 mb-4 text-center">完成訂購</h2>
              <div class="text-justify mb-4">
                <p>
                  恭喜您已完成訂購，當餐點送達指定地點時將以手機或簡訊聯繫您，若無法聯繫到您，此餐點將視為已送達。
                  若您同意，外送員並可選擇將餐點留置在您指定地點或由第三方代領，
                </p>
                <p>若有任何問題，歡迎來電詢問：02-2345678</p>
              </div>
              <div class="text-center">
                <router-link to="/products" class="btn btn-secondary w-100 py-2 fs-lg-5"
                  >繼續逛逛</router-link
                >
              </div>
            </div>
          </div>
        </section>
        <section class="col-lg-5">
          <h2 class="fs-5 fs-lg-4 mb-4">訂購內容</h2>
          <table class="table align-middle" style="font-size: 14px">
            <tbody>
              <tr class="border-bottom"></tr>
              <tr v-for="item in order.products" :key="item.id">
                <td class="d-flex align-items-center justify-content-between gap-5 gap-md-10 py-4">
                  <img
                    :src="item.product.imageUrl"
                    class="object-fit-cover d-block"
                    width="90"
                    height="90"
                    alt="item.product.title"
                  />
                  <div class="d-flex align-items-center justify-content-between w-75">
                    <div>
                      <p class="mb-1">{{ item.product.title }}</p>
                      <p class="mb-1">
                        NT${{ $filters.currency(item.product.price) }} / {{ item.product.unit }}
                      </p>
                      <p class="mb-0">數量：{{ item.qty }}</p>
                    </div>
                    <p class="mb-0 text-end">NT${{ $filters.currency(item.final_total) }}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Alert from '@/mixins/swal.js';

const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      order: {},
      shipping: 0
    };
  },
  methods: {
    getOrder() {
      const { orderId } = this.$route.params;
      this.$http
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/order/${orderId}`)
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            this.order = res.data.order;
            this.shipping = parseInt(this.order.total >= 300 ? 0 : 60);
          }
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    },
    payOrder(id) {
      this.$http
        .post(`${VITE_API_URL}/api/${VITE_API_PATH}/pay/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.getOrder();
            Alert.toastTop('已完成付款', 'success');
          }
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    }
  },
  computed: {},
  mounted() {
    this.getOrder();
  }
};
</script>

<style lang="scss" scoped>
.info tr td {
  background-color: #f4f5ec;
}
.bi-cart-check {
  font-size: 60px;
}
</style>
