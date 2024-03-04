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
      <!-- 購物車有商品時 -->
      <!-- v-if="cartsTotal.carts?.length" -->
      <div>
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
          <div class="col-3 border-bottom border-5 border-gray">
            <div class="d-flex flex-column align-items-center">
              <!-- step2 -->
              <div
                class="rounded-circle bg-gray-3 text-light d-flex align-items-center justify-content-center mb-1"
                style="width: 20px; height: 20px"
              >
                2
              </div>
              <p class="text-gray-3 mb-2 fw-bold">確認付款</p>
            </div>
          </div>
          <div class="col-3 border-bottom border-5 border-gray">
            <div class="d-flex flex-column align-items-center">
              <!-- step3 -->
              <div
                class="rounded-circle bg-gray-3 text-light d-flex align-items-center justify-content-center mb-1"
                style="width: 20px; height: 20px"
              >
                3
              </div>
              <p class="text-gray-3 mb-2 fw-bold">完成訂購</p>
            </div>
          </div>
        </div>
        <!-- cart 內容 -->
        <div class="row justify-content-center">
          <section class="col-lg-5 mb-5 mb-lg-0">
            <div class="d-flex justify-content-between align-items-center">
              <RouterLink to="/products">
                <p class="d-flex align-items-center text-dark mb-6">
                  <span class="material-icons fs-6 me-2"> arrow_back_ios </span>繼續購物
                </p>
              </RouterLink>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger fs-7"
                @click="removeCartsAll"
              >
                清空購物車
              </button>
            </div>
            <table class="table align-middle">
              <tbody>
                <tr class="border-bottom"></tr>
                <tr v-for="cart in carts" :key="cart.id">
                  <td class="d-flex align-items-center justify-content-between gap-5 py-4 px-0">
                    <div class="d-flex align-items-center">
                      <a
                        role="button"
                        class="btn p-0 me-3"
                        :class="{ disabled: loadingStatus === cart.id }"
                        @click.prevent="delCartItem(cart.id)"
                        style="border-color: transparent"
                      >
                        <i class="bi bi-x-square fs-5 text-gray-600"></i>
                      </a>
                      <img
                        :src="cart.product.imageUrl"
                        class="object-fit-cover flex-shrink-0"
                        width="80"
                        height="80"
                        alt="cart.product.title"
                      />
                    </div>
                    <div class="d-flex align-items-center justify-content-between w-75">
                      <div>
                        <p class="mb-1">{{ cart.product.title }}</p>
                        <p class="mb-1">
                          NT${{ $filters.currency(cart.product.price) }} /
                          {{ cart.product.unit }}
                        </p>
                        <div style="width: 80px">
                          <select
                            v-model="cart.qty"
                            class="form-select form-select-sm"
                            @change="changeCartQty(cart)"
                            :disabled="loadingStatus === cart.id"
                          >
                            <option v-for="i in 20" :key="i + 1234" :value="i">{{ i }}</option>
                          </select>
                        </div>
                      </div>
                      <p class="mb-0 text-end">NT${{ $filters.currency(cart.total) }}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex align-items center gap-1 mb-2">
              <i class="bi bi-tags-fill fs-5"></i>
              <label class="form-label"
                >結帳輸入
                <span class="text-primary fw-bold fs-6">vegan032024</span>
                即享有9折本月優惠</label
              >
              <button
                type="button"
                class="btn btn-outline-dark btn-sm py-0 mb-2 ms-1 flex-shrink-0"
                style="font-size: 12px"
                @click="getCoupon"
              >
                取得優惠
              </button>
            </div>
            <div class="input-group input-group-sm mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                aria-label="請輸入優惠碼"
                :value="coupon"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                @click="addCoupon"
              >
                套用
              </button>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fs-6 mb-2">小計</p>
              <p class="fs-6 mb-2 fw-bold">NT${{ $filters.currency(this.order_total) }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fs-6 mb-2">
                運費
                <small v-if="order_total < 300" class="text-danger"
                  >(消費滿 $300 可享免運優惠)</small
                >
                <small v-else class="text-primary">(已達免運門檻！)</small>
              </p>
              <p class="fs-6 mb-2 fw-bold">NT${{ deliveryFee }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="fs-6 mb-2">總計</p>
              <p class="fs-6 mb-2 fw-bold">NT${{ $filters.currency(order_total + deliveryFee) }}</p>
            </div>
            <!-- 折扣 -->
            <div v-if="order_total !== final_total" class="d-flex justify-content-between mb-2">
              <p class="fs-6 mb-2 text-danger">折扣價</p>
              <p class="fs-6 mb-2 fw-bold text-danger">
                NT${{ $filters.currency(final_total + deliveryFee) }}
              </p>
            </div>
          </section>
          <section class="col-lg-5">
            <div class="card border-0 bg-light-green py-4 p-lg-2 ms-lg-4">
              <div class="card-body">
                <v-form v-slot="{ errors }" @submit="onSubmit" ref="form">
                  <h2 class="h5 text-center mb-4">訂單連絡資訊</h2>
                  <div class="mb-4">
                    <label for="name" class="form-label"
                      >姓名<span class="text-danger">*</span></label
                    >
                    <v-field
                      id="name"
                      name="姓名"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['姓名'] }"
                      placeholder="請填寫真實姓名"
                      rules="required"
                      v-model="user.name"
                    ></v-field>
                    <error-message name="姓名" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-4">
                    <label for="phone" class="form-label"
                      >手機<span class="text-danger">*</span></label
                    >
                    <v-field
                      id="phone"
                      name="手機"
                      type="tel"
                      class="form-control"
                      :class="{ 'is-invalid': errors['手機'] }"
                      placeholder="0912345678"
                      :rules="isPhone"
                      v-model="user.tel"
                    ></v-field>
                    <error-message name="手機" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label"
                      >信箱<span class="text-danger">*</span></label
                    >
                    <v-field
                      id="email"
                      name="信箱"
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors['信箱'] }"
                      placeholder="example@email.com"
                      rules="email|required"
                      v-model="user.email"
                    ></v-field>
                    <error-message name="信箱" class="invalid-feedback"></error-message>
                  </div>

                  <div class="mb-4">
                    <label for="address" class="form-label"
                      >外送地址<span class="text-danger">*</span></label
                    >
                    <v-field
                      id="address"
                      name="外送地址"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors['外送地址'] }"
                      placeholder="請填寫地址"
                      rules="required"
                      v-model="user.address"
                    ></v-field>
                    <error-message name="外送地址" class="invalid-feedback"></error-message>
                  </div>
                  <div class="mb-4">
                    <label for="message" class="form-label">訂單備註</label>
                    <v-field
                      as="textarea"
                      id="message"
                      name="訂單備註"
                      class="form-control"
                      rows="3"
                      v-model="message"
                      style="resize: none"
                    ></v-field>
                  </div>
                  <div class="mb-4">
                    <p>註：<span class="text-danger">*</span>為必填欄位</p>
                  </div>
                  <button type="submit" class="btn btn-secondary w-100">送出訂單</button>
                </v-form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- 購物車為空時 -->
      <!-- <div v-else class="text-center">
        <img src="@/assets/image/empty-cart.svg" alt="empty-cart" class="mb-6" />
        <h3 class="mb-6">您的購物車目前是空的喔</h3>
        <a href="#/products" class="btn btn-primary fs-lg-5 px-5 py-3 px-lg-6">現在就去逛逛</a>
      </div> -->
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';

const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: '',
      orderId: '',
      coupon: ''
    };
  },
  mounted() {
    this.getCart();
  },
  computed: {
    ...mapState(cartStore, ['carts', 'order_total', 'deliveryFee', 'final_total'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'removeCartsAll', 'delCartItem', 'changeCartQty']),
    getCoupon() {
      this.coupon = 'vegan032024';
      this.getCart();
    },
    addCoupon() {
      const data = {
        code: this.coupon
      };
      this.$http
        .post(`${VITE_API_URL}/api/${VITE_API_PATH}/coupon`, { data })
        .then((res) => {
          alert('get coupon');
          // Toast.fire({
          //   icon: 'success',
          //   title: res.data.message,
          //   width: 250
          // });
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
          // Toast.fire({
          //   icon: 'error',
          //   title: err.response.data.message,
          //   width: 250
          // });
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需為正確的手機號碼格式';
    }
  }
};
</script>
