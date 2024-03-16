<template>
  <h2 class="mt-2">優惠券管理</h2>
  <div class="container mt-20">
    <div class="text-end m-5">
      <button type="button" class="btn btn-secondary" @click="openModal('new')">新增優惠券</button>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">優惠券名稱</th>
              <th scope="col">優惠碼</th>
              <th scope="col">折扣百分比</th>
              <th scope="col">到期日</th>
              <th scope="col">是否啟用</th>
              <th scope="col">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="coupon in coupons" :key="coupon.id">
              <td>{{ coupon.title }}</td>
              <td>{{ coupon.code }}</td>
              <td>{{ coupon.percent }}%</td>
              <td>{{ new Date(coupon.due_date * 1000).toLocaleDateString() }}</td>
              <td>
                <span v-if="coupon.is_enabled" class="text-success">啟用</span>
                <span v-else class="text-danger">未啟用</span>
              </td>
              <td>
                <button
                  class="btn btn-sm btn-outline-secondary me-1"
                  @click="openModal('edit', coupon)"
                >
                  編輯
                </button>
                <button class="btn btn-sm btn-outline-danger" @click="openModal('delete', coupon)">
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <Coupon-Modal
    ref="couponModal"
    :coupon="tempCoupon"
    @updateCoupon="updateCoupon"
    :isNew="isNew"
  ></Coupon-Modal>

  <Del-Coupon-Modal
    ref="delModal"
    :coupon="tempCoupon"
    @deleteCoupon="deleteCoupon"
  ></Del-Coupon-Modal>

  <!-- <AdminPagination :pages="page" @change-page="getCoupons"></AdminPagination> -->
</template>

<script>
import CouponModal from '@/components/admin/CouponModal.vue';
import DelCouponModal from '@/components/admin/DelCouponModal.vue';
// import AdminPagination from '@/components/admin/AdminPagination.vue';
import Alert from '@/mixins/swal.js';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isNew: true,
      page: {}
    };
  },
  components: {
    CouponModal,
    DelCouponModal
    // AdminPagination
  },
  mounted() {
    this.getCoupons();
  },
  methods: {
    getCoupons(page = 1) {
      this.$http
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          console.log(res);
          this.coupons = res.data.coupons;
          this.page = res.data.pagination;
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    },
    openModal(status, coupon) {
      if (status === 'new') {
        this.tempCoupon = {
          is_enabled: 0,
          due_date: new Date().getTime() / 1000
        };
        this.isNew = true;
        this.$refs.couponModal.openModal();
      } else if (status === 'edit') {
        this.tempCoupon = { ...coupon };
        this.isNew = false;
        this.$refs.couponModal.openModal();
      } else if (status === 'delete') {
        this.tempCoupon = { ...coupon };
        this.$refs.delModal.openModal();
      }
    },
    updateCoupon() {
      let method = 'post';
      let url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/coupon`;
      if (!this.isNew) {
        method = 'put';
        url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/coupon/${this.tempCoupon.id}`;
      }
      this.$http[method](url, { data: this.tempCoupon })
        .then((res) => {
          this.$refs.couponModal.closeModal();
          Alert.toastTop(res.data.message, 'success');
          this.getCoupons();
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    },
    deleteCoupon() {
      this.$http
        .delete(`${VITE_API_URL}/api/${VITE_API_PATH}/admin/coupon/${this.tempCoupon.id}`)
        .then((res) => {
          this.$refs.delModal.closeModal();
          Alert.toastTop(res.data.message, 'success');
          this.getCoupons();
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    }
  }
};
</script>
