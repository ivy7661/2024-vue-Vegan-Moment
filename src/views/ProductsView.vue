<template>
  <h2>產品列表</h2>
  <div class="container">
        <div class="row py-3">
          <div class="col-md-6">
            <h2>產品列表</h2>
            <table class="table table-hover mt-4">
              <thead>
                <tr>
                  <th width="150">產品名稱</th>
                  <th width="120">原價</th>
                  <th width="120">售價</th>
                  <th width="150">是否啟用</th>
                  <th width="120">查看細節</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in products" v-bind:key="item.id">
                  <td width="150">{{item.title }}</td>
                  <td width="120">{{item.origin_price }}</td>
                  <td width="120">{{item.price }}</td>
                  <td width="150">
                    <span class="text-success" v-if="item.is_enabled"
                      >啟用</span
                    >
                    <span v-else>未啟用</span>
                  </td>
                  <td width="120">
                    <button
                      type="button"
                      class="btn btn-primary"
                      v-on:click="productInfo(item)"
                    >
                      查看細節
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>目前有 <span>{{Object.keys(products).length }}</span> 項產品</p>
          </div>
          <!-- 查看商品細節 -->
          <div class="col-md-6">
            <h2>單一產品細節</h2>
            <template v-if="tempProduct.title">
              <div class="card mb-3">
                <img
                  v-bind:src="tempProduct.imageUrl"
                  class="card-img-top primary-image"
                  alt="主圖"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    {{tempProduct.title }}
                    <span class="badge bg-primary ms-2"
                      >{{tempProduct.category}}</span
                    >
                  </h5>
                  <p class="card-text">商品描述：{{tempProduct.description}}</p>
                  <p class="card-text">商品內容：{{tempProduct.content }}</p>
                  <div class="d-flex">
                    <p class="card-text me-2">{{tempProduct.price }}</p>
                    <p class="card-text text-secondary">
                      <del>{{tempProduct.origin_price }}</del>
                    </p>
                    元 / {{tempProduct.unit }}
                  </div>
                </div>
              </div>
              <template v-if="tempProduct.title">
                <img class="images m-2" v-for="img in tempProduct?.imagesUrl"  :key="img" :src="img"/>
              </template>
            </template>
            <p class="text-secondary" v-else>請選擇一個商品查看</p>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios'
const { VITE_API_URL, VITE_API_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      tempProduct: {}
    }
  },
  methods: {
    getProducts () {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/products`
      axios
        .get(url)
        .then((response) => {
          // console.log(response.data);
          this.products = response.data.products
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    productInfo (item) {
      this.tempProduct = item
    }
  },
  mounted () {
    // 取出先前存在cookie內的token，參數內的名稱要跟剛才在login.js設的相同(hexVueToken)
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    // console.log(token);
    // 進行全域性 token 預設
    axios.defaults.headers.common.Authorization = token
    this.getProducts()
  }
}
</script>
