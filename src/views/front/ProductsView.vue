<template>
  <!-- banner -->
  <!-- <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3 fs-lg-2">線上訂餐</h1>
        </div>
      </div>
    </div>
  </section> -->
  <div class="container">
    <!-- breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-3 mt-3">
        <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/products" class="text-dark">線上訂餐</RouterLink>
        </li>
      </ol>
    </nav>
    <!-- 類別 nav -->
    <div class="row d-flex justify-content-start">
      <div class="col-8">
        <div class="d-flex flex-row">
          <ul class="navbar-nav me-1">
            <li class="nav-item">
              <router-link :to="`/products`" class="nav-link d-inline-block fs-5 mx-2"
                >全部餐點</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav d-flex justify-content-between">
            <li class="nav-item">
              <router-link
                v-for="category in categories"
                :key="category"
                :to="`/products?category=${category}`"
                class="nav-link d-inline-block fs-5 mx-2"
                :class="{ tabActive: selected }"
                @click="selectedClass(category)"
                >{{ category }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 商品 -->
    <section>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gx-4 gy-5 mt-1 mb-8">
        <div v-for="product in products" :key="product.id">
          <div class="col">
            <div class="card-img">
              <RouterLink :to="`/products/${product.id}`">
                <img
                  :src="product.imageUrl"
                  :alt="product.title"
                  class="w-100 d-block rounded-3"
                  height="240"
                />
              </RouterLink>
            </div>

            <div class="py-3 py-lg-2">
              <RouterLink :to="`/products/${product.id}`">
                <h4 class="fs-4 text-dark mb-2 mb-lg-1">{{ product.title }}</h4>
              </RouterLink>
              <h5 class="text-primary d-flex align-items-center">
                NT${{ product.price }}
                <span class="fs-6 text-gray-600 ms-2"
                  ><del>NT${{ product.origin_price }}</del></span
                >
              </h5>
            </div>

            <!-- 購物車 btn -->
            <button
              type="button"
              class="btn btn-secondary fs-6 w-100"
              @click="addToCart(product.id, cartQty)"
            >
              <!-- :disabled="loadingStatus === product.id" -->
              <span>加入購物車</span>
            </button>
          </div>
        </div>
      </div>
      <!-- <ProductsPagination></ProductsPagination> -->
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      categories: ['主餐', '輕食', '果昔碗', '飲品'],
      cartQty: 1,
      selected: false
    };
  },
  mounted() {
    this.getProducts();
  },
  watch: {
    '$route.query': {
      handler() {
        this.getProducts();
      },
      deep: true
    }
  },
  methods: {
    getProducts() {
      const { category = '' } = this.$route.query;

      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/products?category=${category}`;

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
    productInfo(product) {
      this.tempProduct = product;
    },
    ...mapActions(cartStore, ['addToCart']),
    selectedClass(category) {
      if (this.$route.query.category === category) {
        this.selected = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-item .nav-link {
  font-weight: 400;
  border-bottom: 4px solid transparent;
}
.tabActive {
  color: #698f39;
  border-bottom: 4px solid #698f39;
}

// .nav-item .nav-link:focus {
//   color: #698f39;
//   border-bottom: 4px solid #698f39;
// }

// .nav-item .router-link-exact-active {
//   color: #698f39;
//   border-bottom: 4px solid #698f39;
// }

// .nav-item .nav-link.active {
//   color: #698f39;
//   border-bottom: 4px solid #698f39;
// }

// .router-link.active {
//   color: #698f39;
//   border-bottom: 4px solid #698f39;
// }

.card-img {
  overflow: hidden;
  border-radius: 10px;
  img {
    transition: all 0.6s ease;
    &:hover {
      transform: scale(1.15);
    }
  }
}
</style>
