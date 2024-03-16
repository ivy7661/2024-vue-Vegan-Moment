import { defineStore } from 'pinia';
import Swal from 'sweetalert2';
import Alert from '@/mixins/swal.js';
import axios from 'axios';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    order_total: 0,
    final_total: 0,
    total: 0,
    deliveryFee: 0,
    loadingStatus: false
  }),
  actions: {
    getCart() {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/cart`;

      axios
        .get(url)
        .then((res) => {
          this.carts = res.data.data.carts;
          this.final_total = res.data.data.final_total;
          this.total = res.data.data.total;
          this.order_total = res.data.data.total;
          this.deliveryFee = parseInt(this.order_total) >= 300 ? 0 : 60;
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    },
    addToCart(id, cartQty) {
      this.loadingStatus = true;

      const order = {
        product_id: id,
        qty: cartQty
      };
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/cart`;
      axios.post(url, { data: order }).then((res) => {
        this.loadingStatus = false;

        Alert.toastTop(res.data.message, 'success');
        this.getCart();
      });
    },
    changeCartQty(cart) {
      const data = {
        product_id: cart.product_id,
        qty: cart.qty
      };
      // status.loadingStatus = cart.id;
      axios
        .put(`${VITE_API_URL}/api/${VITE_API_PATH}/cart/${cart.id}`, { data })
        .then((res) => {
          Alert.toastTop(res.data.message, 'success');

          this.getCart();
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message);
        });
    },
    alertDelAll() {
      Swal.fire({
        title: '請問您確認要清空購物車嗎？',
        text: '刪除後將無法恢復',
        icon: 'warning',
        // customClass: {
        //   confirmButton: 'btn btn-danger ms-2',
        //   cancelButton: 'btn btn-outline-danger'
        // },
        // buttonsStyling: false,
        confirmButtonText: '確認刪除',
        showCancelButton: true,
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          this.removeCartsAll();
        }
      });
    },
    confirmRemove() {},
    removeCartsAll() {
      axios
        .delete(`${VITE_API_URL}/api/${VITE_API_PATH}/carts`)
        .then(() => {
          Alert.toastTop('已清空購物車', 'success');
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
    delCartItem(id) {
      // status.loadingStatus = id;
      axios
        .delete(`${VITE_API_URL}/api/${VITE_API_PATH}/cart/${id}`)
        .then((res) => {
          // status.loadingStatus = '';
          // Toast.fire({
          //   icon: 'success',
          //   title: res.data.message,
          //   width: 250
          // });
          alert('刪除成功');
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
    }
  }
});
