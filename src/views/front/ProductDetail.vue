<template>
  <div class="container">
    <VueLoading v-model:active="isLoading" :is-full-page="fullPage">
      <template #default>
        <VeganLoader />
      </template>
    </VueLoading>
    <div class="row justify-content-center py-lg-0">
      <section class="col-lg-5">
        <!-- breadcrumb -->
        <div class="my-4">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-3">
              <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
              <li class="breadcrumb-item"><RouterLink to="/products">線上訂餐</RouterLink></li>
              <li class="breadcrumb-item">
                {{ productInfo.category }}
              </li>
              <!-- <li class="breadcrumb-item active" aria-current="page">
                {{ productInfo.selectCategories }}
              </li> -->
            </ol>
          </nav>
        </div>
        <div class="mb-5 vl-parent" ref="load">
          <img
            v-if="!selectImg"
            :src="productInfo.imageUrl"
            :alt="productInfo.title"
            class="object-fit-cover w-100 mb-2 h-lg-img"
            height="250"
          />
          <img
            v-else
            :src="selectImg"
            :alt="productInfo.title"
            class="object-fit-cover w-100 mb-2 h-lg-img"
            height="250"
          />
          <img
            v-for="img in productInfo.imagesUrl"
            :key="img"
            :src="img"
            :alt="productInfo.title"
            width="80"
            height="80"
            class="object-fit-cover me-2"
            @click="selectImg = img"
            style="cursor: pointer"
          />
        </div>
      </section>
      <!-- PC 商品 -->
      <section class="col-lg-5 my-lg-10">
        <h1 class="h2 mb-2">{{ productInfo.title }}</h1>
        <h6 class="mb-2 mb-lg-3 text-gray-600">{{ productInfo.info }}</h6>
        <div class="d-flex flex-row">
          <p class="h2 text-bold text-primary mb-1 me-3">NT${{ productInfo.price }}</p>
          <p class="h4 mt-2 mb-4">
            <small class="text-gray-3"
              ><del>NT${{ productInfo.origin_price }}</del></small
            >
          </p>
        </div>

        <div class="d-flex flex-row">
          <p class="mt-2 me-2">數量：</p>
          <select
            class="form-select mb-4"
            v-model="cartQty"
            :disabled="loadingStatus === productInfo.id"
            style="max-width: 150px"
          >
            <option v-for="i in 20" :key="i + 1234" :value="i">{{ i }}</option>
          </select>
        </div>
        <!-- 加入購物車 -->
        <button
          type="button"
          class="btn btn-outline-secondary mb-3 me-4 d-block w-100"
          :disabled="loadingStatus"
          @click="addToCart(productInfo.id, cartQty)"
        >
          加入購物車
          <i class="ms-1 fa-solid fa-spinner fa-spin" v-if="loadingStatus"></i>
        </button>
        <!-- 立即購買 -->
        <button
          type="button"
          class="btn btn-secondary mb-3 me-4 d-block w-100"
          @click="buyNow(productInfo.id, cartQty)"
        >
          立即購買
        </button>

        <div class="mb-4">
          <p class="fs-6 fw-bold text-primary">商品介紹</p>
          <p>
            {{ productInfo.description }}
          </p>
        </div>
        <div v-if="productInfo.allergy" class="mb-4">
          <p class="fs-6 fw-bold text-primary">過敏資訊</p>
          <p>
            {{ productInfo.allergy }}
          </p>
        </div>
      </section>

      <section class="col-lg-10 py-8 pt-lg-0">
        <div class="text-center text-lg-start">
          <h2 class="position-relative fs-3 fs-lg-2 fw-lg-bold mb-3 mb-lg-4">
            <i class="bi bi-feather text-primary"></i>
            相關餐點
          </h2>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5">
          <template v-for="item in products" :key="item.id">
            <div
              class="col"
              v-if="item.category === productInfo.category && item.title !== productInfo.title"
            >
              <div class="col">
                <div class="card-img">
                  <RouterLink :to="`/products/${item.id}`">
                    <img
                      :src="item.imageUrl"
                      :alt="item.title"
                      class="w-100 d-block rounded-3"
                      height="240"
                    />
                  </RouterLink>
                </div>

                <div class="py-3 py-lg-2">
                  <RouterLink :to="`/products/${item.id}`">
                    <h4 class="fs-4 text-dark mb-2 mb-lg-1">{{ item.title }}</h4>
                  </RouterLink>
                  <h5 class="text-primary d-flex align-items-center">
                    NT${{ item.price }}
                    <span class="fs-6 text-gray-600 ms-2"
                      ><del>NT${{ item.origin_price }}</del></span
                    >
                  </h5>
                </div>
                <!-- 購物車 btn -->
                <button
                  type="button"
                  class="btn btn-secondary fs-6 w-100"
                  @click="addToCart(item.id, cartQty)"
                  :disabled="loadingProductId === item.id"
                >
                  <span>加入購物車</span>
                  <i class="fas fa-spinner fa-pulse ms-2" v-if="loadingProductId === item.id"></i>
                </button>
              </div>
            </div>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import VeganLoader from '../../components/icons/VeganLoader.vue';
import loadingStore from '../../stores/loadingStore';

import axios from 'axios';
import { mapState, mapActions } from 'pinia';
import productStore from '../../stores/productStore';
import cartStore from '../../stores/cartStore';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      productId: '',
      productInfo: {},
      cartQty: 1,
      selectImg: '',
      fullPage: true,
      isLoading: false
    };
  },
  components: {
    VueLoading,
    VeganLoader
  },
  mounted() {
    this.getProduct();
    this.cartQty = 1;
    this.getProducts();
  },
  computed: {
    ...mapState(productStore, ['products']),
    ...mapState(cartStore, ['loadingStatus']),
    ...mapState(loadingStore, ['loadingProductId'])
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler() {
        if (this.$route.params.id) {
          this.getProduct();
        }
      }
    }
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
    buyNow(id, Qty) {
      this.addToCart(id, Qty);
      this.$router.push('/orderInfo');
    },
    getProduct() {
      this.isLoading = true;
      this.productId = this.$route.params.id;
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/product/${this.productId}`;
      axios.get(url).then((res) => {
        this.isLoading = false;
        this.productInfo = res.data.product;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
