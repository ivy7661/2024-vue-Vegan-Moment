<template>
  <!-- banner -->
  <!-- <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3">線上訂餐</h1>
        </div>
      </div>
    </div>
  </section> -->
  <div class="container">
    <!-- 舊的 -->
    <!-- <router-link
      v-for="category in categories"
      :key="category"
      :to="`/products?category=${category}`"
      class="d-inline-block fs-5 mx-2"
      :class="{ tabActive: selected }"
      @click="changeClass(category)"
      >{{ category }}</router-link
    > -->
    <!-- breadcrumb -->
    <nav>
      <ol class="breadcrumb mb-3 mt-3">
        <li class="breadcrumb-item"><RouterLink to="/" class="fs-6">首頁</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/products" class="text-dark fs-6">線上訂餐</RouterLink>
        </li>
      </ol>
    </nav>
    <!-- 新的 -->
    <section class="row justify-content-center mb-10">
      <div class="col-12">
        <!-- 產品 nav-tabs-->
        <ul class="nav sticky-top bg-light pb-1 mb-4 nav-tab-top" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active fs-5 text-dark px-1 mx-2"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all"
              href="#"
              role="tab"
            >
              全部商品
            </a>
          </li>
          <li v-for="tab in categories" class="nav-item" role="presentation" :key="tab">
            <a
              class="nav-link fs-5 text-dark px-1 mx-2"
              :id="`${tab[1]}-tab`"
              data-bs-toggle="tab"
              :data-bs-target="`#${tab[1]}`"
              href="#"
              role="tab"
            >
              {{ tab[0] }}
            </a>
          </li>
        </ul>
        <!-- 產品 nav-tabs-content-->
        <div class="tab-content" id="myTabContent">
          <!-- 全部商品 -->
          <div class="tab-pane fade show active" id="all" role="tabpanel">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5 mb-5">
              <template v-for="product in displayedProducts" :key="product.id">
                <div v-if="products" class="col card-hover">
                  <div class="position-relative hover-show-btn">
                    <div class="hover-img-mask">
                      <RouterLink :to="`/product/${product.id}`" class="hover-img-mask">
                        <img
                          :src="product.imageUrl"
                          :alt="product.title"
                          class="w-100 d-block rounded-3 object-fit-cover"
                          height="240"
                        />
                      </RouterLink>
                      <button
                        type="button"
                        class="add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5"
                        :disabled="loadingStatus === product.id"
                        @click="addToCart(product.id)"
                      >
                        <i
                          class="fas fa-spinner fa-pulse me-2"
                          v-if="loadingStatus === product.id"
                        ></i>
                        <span>加入購物車</span>
                      </button>
                    </div>
                  </div>
                  <RouterLink :to="`/product/${product.id}`">
                    <div class="py-3 py-lg-4">
                      <h4 class="fs-5 text-dark mb-2 mb-lg-3">{{ product.title }}</h4>
                      <h5 class="text-primary d-flex align-items-center">
                        NT${{ $filters.currency(product.price) }}
                        <span class="fs-6 text-gray-dark ms-2"
                          ><del>NT${{ $filters.currency(product.origin_price) }}</del></span
                        >
                      </h5>
                    </div>
                  </RouterLink>
                </div>
              </template>
            </div>
            <ProductsPagination></ProductsPagination>
          </div>
          <!-- 超飽足果昔盆、輕食冷盤、湯品、裸食甜點、果昔飲品 -->
          <div
            v-for="tab in categories"
            :key="tab"
            class="tab-pane fade"
            :id="tab[1]"
            role="tabpanel"
          >
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5">
              <template v-for="product in products" :key="product.id">
                <div v-if="product.category === tab[0]" class="col card-hover">
                  <div class="position-relative hover-show-btn">
                    <div class="hover-img-mask">
                      <RouterLink :to="`/product/${product.id}`" class="hover-img-mask">
                        <img
                          :src="product.imageUrl"
                          :alt="product.title"
                          class="w-100 d-block rounded-3 object-fit-cover"
                          height="240"
                        />
                      </RouterLink>
                      <button
                        type="button"
                        class="add-to-cart-btn btn btn-primary position-absolute bottom-0 start-50 translate-middle py-3 fs-5"
                        :disabled="loadingStatus === product.id"
                        @click="addToCart(product.id)"
                      >
                        <i
                          class="fas fa-spinner fa-pulse me-2"
                          v-if="loadingStatus === product.id"
                        ></i>
                        <span>加入購物車</span>
                      </button>
                    </div>
                  </div>
                  <RouterLink :to="`/product/${product.id}`">
                    <div class="py-3 py-lg-4">
                      <h4 class="fs-5 text-dark mb-2 mb-lg-3">{{ product.title }}</h4>
                      <h5 class="text-primary d-flex align-items-center">
                        NT${{ $filters.currency(product.price) }}
                        <span class="fs-6 text-gray-dark ms-2"
                          ><del>NT${{ $filters.currency(product.origin_price) }}</del></span
                        >
                      </h5>
                    </div>
                  </RouterLink>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 舊的商品 -->
    <!-- <section>
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

            購物車 btn
            <button
              type="button"
              class="btn btn-secondary fs-6 w-100"
              @click="addToCart(product.id, cartQty)"
            >
              :disabled="loadingStatus === product.id"
              <span>加入購物車</span>
            </button>
          </div>
        </div>
      </div>
      <ProductsPagination></ProductsPagination>
    </section> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '../../stores/cartStore';
import productStore from '../../stores/productStore';
export default {
  data() {
    return {
      tempProduct: {},
      // categories: ['主餐', '輕食', '果昔碗', '飲品'],
      categories: [
        ['主餐', 'main'],
        ['輕食', 'salad'],
        ['飲品', 'juice']
      ],
      cartQty: 1
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
  computed: {
    ...mapState(productStore, ['products', 'displayedProducts'])
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
    productInfo(product) {
      this.tempProduct = product;
    },
    changeClass(category) {
      setTimeout(() => {
        this.selectedClass(category);
      }, 1000);
    },
    selectedClass(category) {
      if (this.$route.query.category === category) {
        this.selected = true;
        console.log(this.selected);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-tab-top {
  top: 80px;
  // @include mobile() {
  //   top: 80px;
  // }
}
.nav-link:focus {
  border-color: transparent;
}
.nav-link {
  border-bottom: 4px solid transparent;
  &:hover {
    border-color: transparent;
  }
}
.nav-link.active {
  border-bottom: 4px solid #698f39;
}
// .nav-item .nav-link {
//   font-weight: 400;
//   border-bottom: 4px solid transparent;
// }
// .tabActive {
//   color: #698f39;
//   border-bottom: 4px solid #698f39;
// }

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
