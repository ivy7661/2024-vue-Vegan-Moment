import { defineStore } from 'pinia';
import axios from 'axios';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    final_total: 0,
    total: 0
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
          console.log('piniaCart', this.carts);
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
    }
  }
});
