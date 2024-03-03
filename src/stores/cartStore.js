import { defineStore } from 'pinia';
import axios from 'axios';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    order_total: 0,
    final_total: 0,
    total: 0,
    deliveryFee: 0
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

          console.log('piniaCart', res);
        })
        .catch((err) => {
          alert(err.res.data.message);
        });
    },
    addToCart(id, cartQty) {
      const order = {
        product_id: id,
        qty: cartQty
      };
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/cart`;
      axios.post(url, { data: order }).then((res) => {
        console.log(res);
        alert('加入購物車成功');
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
          alert('修改成功');
          // status.loadingStatus = '';
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
    removeCartsAll() {
      axios
        .delete(`${VITE_API_URL}/api/${VITE_API_PATH}/carts`)
        .then(() => {
          alert('已清空購物車');
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
