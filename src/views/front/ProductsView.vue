<template>
  <h2>產品列表</h2>
  <div class="container">
    <div class="row py-3">
      <div class="col-md-6">
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th width="150">產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="120">查看細節</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" v-bind:key="item.id">
              <td width="150">{{ item.title }}</td>
              <td width="120">{{ item.origin_price }}</td>
              <td width="120">{{ item.price }}</td>
              <td>
                <div>
                  <RouterLink class="btn btn-success me-2" :to="`/products/${item.id}`"
                    >查看</RouterLink
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          目前有 <span>{{ Object.keys(products).length }}</span> 項產品
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      tempProduct: {}
    };
  },
  methods: {
    getProducts() {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/products`;
      axios
        .get(url)
        .then((response) => {
          // console.log(response.data);
          this.products = response.data.products;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    productInfo(item) {
      this.tempProduct = item;
    }
  },
  mounted() {
    this.getProducts();
  }
};
</script>
