<template>
  <div class="container">
    <VueLoading v-model:active="isLoading" :is-full-page="fullPage">
      <template #default>
        <VeganLoading />
      </template>
    </VueLoading>
    <div class="row justify-content-center py-4 py-lg-0">
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
          class="btn btn-secondary mb-3 me-4 d-block w-100"
          :disabled="loadingStatus === productInfo.id"
          @click="addToCart(productInfo.id, cartQty)"
        >
          <!-- productInfoQty -->
          加入購物車
          <i class="ms-1 fa-solid fa-spinner fa-spin" v-if="loadingStatus"></i>
        </button>
        <!-- 收藏 -->
        <button
          type="button"
          class="btn btn-outline-secondary mb-4 d-block w-100"
          :disabled="loadingStatus === productInfo.id"
          @click="addToCart(productInfo.id, productInfoQty)"
        >
          收藏餐點
        </button>
        <!-- style="width: 250px" -->

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

      <!-- <section class="col-lg-10 py-8 pt-lg-15">
        <div class="text-center text-lg-start">
          <h2 class="block-title position-relative fs-3 fs-lg-2 fw-lg-bold mb-6 mb-lg-10">
            相關餐點
          </h2>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5">
          <template v-for="item in productInfos" :key="item.id">
            <div
              v-if="
                item.selectCategories === productInfo.selectCategories && item.title !== productInfo.title
              "
              class="col"
            >
              <div class="position-relative hover-show-btn">
                <div class="hover-img-mask">
                  <RouterLink :to="`/productInfo/${item.id}`" class="hover-img-mask">
                    <img
                      :src="item.imageUrl"
                      :alt="item.title"
                      class="w-100 d-block rounded-3 object-fit-cover"
                      height="240"
                    />
                  </RouterLink>
                  <button
                    type="button"
                    class="add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5"
                    :disabled="loadingStatus === item.id"
                    @click="addToCart(item.id)"
                  >
                    <i class="fas fa-spinner fa-pulse me-2" v-if="loadingStatus === item.id"></i>
                    <span>加入購物車</span>
                  </button>
                </div>
              </div>
              <RouterLink :to="`/productInfo/${item.id}`">
                <div class="py-3 py-lg-4">
                  <h4 class="fs-5 text-center text-dark mb-2 mb-lg-3">{{ item.title }}</h4>
                  <h5 class="text-primary d-flex align-items-center justify-content-center">
                    NT${{ $filters.toThousands(item.price) }}
                    <span class="fs-6 text-gray-dark ms-2"
                      ><del>NT${{ $filters.toThousands(item.origin_price) }}</del></span
                    >
                  </h5>
                </div>
              </RouterLink>
            </div>
          </template>
        </div>
      </section> -->
    </div>
  </div>
</template>

<script>
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { h } from 'vue';
import VeganLoading from '../../components/icons/VeganLoading.vue';
import axios from 'axios';
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';
// import cartsStore from '@/store/cartsStore.js';
// import productsStore from '@/store/productsStore.js';
// import Toast from '@/mixins/toast.js';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      productId: '',
      productInfo: {},
      cartQty: 1,
      selectImg: ''
    };
  },
  components: {
    VueLoading,
    VeganLoading
  },
  mounted() {
    this.getProducts();
    this.cartQty = 1;
  },
  computed: {
    ...mapState(cartStore, ['loadingStatus'])
  },
  methods: {
    getProducts() {
      const loader = this.$loading.show(
        {
          props: { spinner: VeganLoading },
          // Pass props by their camelCased names
          container: this.$refs.loadingContainer,
          canCancel: true,
          color: '#000000',
          loader: 'spinner',
          width: 64,
          height: 64,
          opacity: 0.5,
          zIndex: 999
        },
        {
          // Pass slots by their names
          default: h('WineGlassLoader')
        }
      );
      // const loader = this.$loading.show({
      //   container: this.fullPage ? null : this.$refs.load,
      //   canCancel: false
      // });
      this.productId = this.$route.params.id;
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/product/${this.productId}`;
      axios.get(url).then((res) => {
        loader.hide();
        this.productInfo = res.data.product;
      });
    },
    ...mapActions(cartStore, ['addToCart'])
  }
};
</script>

<style lang="scss" scoped></style>
