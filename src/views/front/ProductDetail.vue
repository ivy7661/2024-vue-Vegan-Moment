<template>
  <div class="col-md-6">
    <h2>商品資訊</h2>
    <template v-if="productInfo.title">
      <div class="card mb-3">
        <img
          v-bind:src="productInfo.imageUrl"
          class="card-img-top primary-image"
          alt="主圖"
        />
        <div class="card-body">
          <h5 class="card-title">
            {{productInfo.title }}
            <span class="badge bg-primary ms-2"
              >{{productInfo.category}}</span
            >
          </h5>
          <p class="card-text">商品描述：{{productInfo.description}}</p>
          <p class="card-text">商品內容：{{productInfo.content }}</p>
          <div class="d-flex">
            <p class="card-text me-2">{{productInfo.price }} 元</p>
            <p class="card-text text-secondary">
              <del>{{productInfo.origin_price }}</del>
            </p>
          </div>
        </div>
      </div>
      <template v-if="productInfo.title">
        <img class="images m-2" v-for="img in productInfo?.imagesUrl"  :key="img" :src="img" style="width: 200px;"/>
      </template>
    </template>
    <p class="text-secondary" v-else>請選擇一個商品查看</p>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_API_URL, VITE_API_PATH } = import.meta.env

export default {
  data () {
    return {
      productId: '',
      productInfo: {}
    }
  },
  mounted () {
    this.productId = this.$route.params.id
    const url = `${VITE_API_URL}/api/${VITE_API_PATH}/product/${this.productId}`
    axios.get(url).then((res) => {
      this.productInfo = res.data.product
    })
  }

}
</script>
