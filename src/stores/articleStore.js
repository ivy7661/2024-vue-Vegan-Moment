import { defineStore } from 'pinia';
import axios from 'axios';
// import Toast from '@/mixins/toast.js';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default defineStore('articleStore', {
  state: () => ({
    articles: [],
    // isLoading: false,
    page: {}
  }),
  actions: {
    getArticles(page = 1) {
      // this.isLoading = true;
      axios
        .get(`${VITE_API_URL}/api/${VITE_API_PATH}/articles?page=${page}`)
        .then((res) => {
          // this.isLoading = false;
          // this.page = res.data.pagination;
          this.articles = res.data.articles;
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
