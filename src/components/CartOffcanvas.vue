<template>
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvas"
    ref="offcanvas"
    aria-labelledby="offcanvasLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasLabel">
        購物車 <span v-if="this.carts?.length">({{ this.carts?.length }})</span>
      </h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body pt-0">
      <div v-if="this.carts?.length">
        <div class="text-end">
          <button
            type="button"
            class="btn btn-sm btn-outline-danger mb-2 fs-7"
            @click="removeCartsAll"
          >
            清空購物車
          </button>
        </div>
        <table class="table align-middle" style="font-size: 14px">
          <tbody>
            <tr class="border-bottom"></tr>
            <tr v-for="cart in this.carts" :key="cart.id">
              <td class="d-flex align-items-center justify-content-between gap-5 py-4 px-0">
                <div class="d-flex align-items-center">
                  <a
                    role="button"
                    class="btn p-0 me-3"
                    @click.prevent="delCartItem(cart.id)"
                    style="border-color: transparent"
                  >
                    <!-- :class="{ disabled: loadingStatus === cart.id }" -->
                    <i class="bi bi-x-square fs-5 text-gray-600"></i>
                  </a>
                  <img
                    :src="cart.product.imageUrl"
                    class="flex-shrink-0"
                    width="80"
                    height="80"
                    alt="cart.product.title"
                  />
                </div>
                <div class="d-flex align-items-center justify-content-between w-75">
                  <div>
                    <p class="mb-1 text-dark">{{ cart.product.title }}</p>
                    <p class="mb-1">
                      NT${{ $filters.currency(cart.product.price) }} / {{ cart.product.unit }}
                    </p>
                    <div style="width: 80px">
                      <select
                        v-model="cart.qty"
                        class="form-select form-select-sm"
                        @change="changeCartQty(cart)"
                      >
                        <!-- :disabled="loadingStatus === cart.id" -->
                        <option v-for="i in 20" :key="i" :value="i">{{ i }}</option>
                      </select>
                    </div>
                  </div>
                  <p class="mb-0 text-end">NT${{ $filters.currency(cart.total) }}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between">
          <p class="fs-6 mb-2">小計</p>
          <p class="fs-6 mb-2 fw-bold">NT${{ $filters.currency(this.order_total) }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="fs-6 mb-2">
            運費
            <small v-if="order_total < 300" class="text-danger">(消費滿 $300 可享免運優惠)</small>
            <small v-else class="text-primary">(已達免運門檻！)</small>
          </p>
          <p class="fs-6 mb-2 fw-bold">NT${{ deliveryFee }}</p>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <p class="fs-6 mb-2">總計</p>
          <p class="fs-6 mb-2 fw-bold">NT${{ $filters.currency(order_total + deliveryFee) }}</p>
        </div>
        <a href="#" class="btn btn-secondary w-100 mb-2" @click.prevent="toOrderInfo()">立即結帳</a>
      </div>
      <!-- 購物車為空時 -->
      <div v-else class="text-center">
        <i class="bi bi-cart4 fs-1 text-primary"></i>
        <h3 class="fs-5 mb-6 mt-3">目前購物車是空的喔! 再去選購吧~</h3>
        <router-link
          to=""
          @click.prevent="toProducts()"
          class="btn btn-secondary fs-lg-5 px-3 py-2 px-lg-6"
          >前往訂餐</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '../stores/cartStore';
import Offcanvas from 'bootstrap/js/src/offcanvas';

const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      cartOffcanvas: null,
      cart: {}
    };
  },
  computed: {
    ...mapState(cartStore, ['carts', 'order_total', 'deliveryFee'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'changeCartQty', 'removeCartsAll', 'delCartItem']),
    toggleTheOffcanvas() {
      this.cartOffcanvas.toggle();
    },
    updateCart(data) {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/cart/${data.id}`;
      const cart = {
        product_id: data.product_id,
        qty: data.qty
      };

      this.$http
        .put(url, { data: cart })
        .then((res) => {
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    toProducts() {
      this.cartOffcanvas.hide();
      this.$router.push('/products');
    },
    toOrderInfo() {
      this.cartOffcanvas.hide();
      this.$router.push('/orderInfo');
    }
  },
  mounted() {
    this.cartOffcanvas = new Offcanvas(this.$refs.offcanvas);
  }
};
</script>
