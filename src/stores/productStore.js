import { defineStore } from 'pinia';
import axios from 'axios';
import loadingStore from './loadingStore';
import Alert from '@/mixins/swal.js';

const status = loadingStore();
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default defineStore('productsStore', {
  state: () => ({
    products: [],
    perPage: 8,
    currentPage: 1,
    totalPages: 1,
    displayedProducts: []
  }),
  actions: {
    getProducts(page = 1) {
      // status.isLoading = true;
      axios
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/products/all`)
        .then((res) => {
          status.isLoading = false;
          this.products = res.data.products;
          this.updatePagination(page);
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    },
    updatePagination(page) {
      this.totalPages = Math.ceil(this.products.length / this.perPage);
      this.currentPage = page;
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      this.displayedProducts = this.products.slice(startIndex, endIndex);
    },
    getCategoryProduct() {
      const { category = '' } = this.$route.query;

      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/products?category=${category}`;

      axios
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          Alert.toastTop(res.data.message, 'success');
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    }
  }
});
