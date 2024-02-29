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
        <!-- <li class="breadcrumb-item active" aria-current="page">線上訂餐</li> -->
      </ol>
    </nav>
    <!-- main -->
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
                >{{ category }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <section class="row justify-content-center mb-10">
      <div class="col-12">
        <!-- 產品 nav-tabs-content-->
        <div class="tab-content" id="myTabContent">
          <!-- 全部商品 -->
          <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
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
                      <h4 class="fs-5 fs-lg-4 text-dark mb-2 mb-lg-3">{{ product.title }}</h4>
                      <h5 class="text-primary d-flex align-items-center">
                        NT${{ product.price }}
                        <span class="fs-6 text-gray-dark ms-2"
                          ><del>NT${{ product.origin_price }}</del></span
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
            v-for="tab in categoriesTabs"
            :key="tab"
            class="tab-pane fade"
            :id="tab[1]"
            role="tabpanel"
            :aria-labelledby="`${tab[1]}-tab`"
          >
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-5">
              <template v-for="product in products" :key="product.id">
                <div v-if="product.selectCategories === tab[0]" class="col card-hover">
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
                      <h5 class="mb-2 mb-lg-3">
                        <span v-for="feature in product.checkboxFeatures" :key="feature">
                          <span
                            v-if="feature === '純素'"
                            class="badge fs-6 bg-primary-light text-primary px-2 py-1 me-1 me-lg-2"
                            >{{ feature }}</span
                          >
                          <span
                            v-if="feature === '有機'"
                            class="badge fs-6 px-2 py-1 me-1 me-lg-2"
                            style="color: #2d9449; background-color: #ecf8f4"
                            >{{ feature }}</span
                          >
                          <span
                            v-if="feature === '無麩質'"
                            class="badge fs-6 px-2 py-1 me-1 me-lg-2"
                            style="color: #817447; background-color: #f8efec"
                            >{{ feature }}</span
                          >
                          <span
                            v-if="feature === '辣'"
                            class="badge fs-6 px-2 py-1"
                            style="color: #814747; background-color: #f8ecec"
                            >{{ feature }}</span
                          >
                        </span>
                      </h5>
                      <h4 class="fs-5 fs-lg-4 text-dark mb-2 mb-lg-3">{{ product.title }}</h4>
                      <h5 class="text-primary d-flex align-items-center">
                        NT${{ $filters.toThousands(product.price) }}
                        <span class="fs-6 text-gray-dark ms-2"
                          ><del>NT${{ $filters.toThousands(product.origin_price) }}</del></span
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
  </div>

  <!-- 舊版 -->
  <div class="col card-hover" v-for="product in products" v-bind:key="product.id">
    <div class="position-relative hover-show-btn">
      <div class="hover-img-mask">
        <RouterLink :to="`/products/${product.id}`" class="hover-img-mask">
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
          <i class="fas fa-spinner fa-pulse me-2" v-if="loadingStatus === product.id"></i>
          <span>加入購物車</span>
        </button>
      </div>
    </div>
    <RouterLink :to="`/product/${product.id}`">
      <div class="py-3 py-lg-4">
        <h4 class="fs-5 fs-lg-4 text-dark mb-2 mb-lg-3">{{ product.title }}</h4>
        <h5 class="text-primary d-flex align-items-center">
          NT${{ product.price }}
          <span class="fs-6 text-gray-dark ms-2"
            ><del>NT${{ product.origin_price }}</del></span
          >
        </h5>
      </div>
    </RouterLink>
  </div>

  <h2>產品列表</h2>
  <div class="container">
    <div class="row py-3">
      <div class="col-md-6">
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th width="120">產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="120">查看細節</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" v-bind:key="product.id">
              <td width="120">{{ product.title }}</td>
              <td width="120">{{ product.origin_price }}</td>
              <td width="120">{{ product.price }}</td>
              <td>
                <div>
                  <RouterLink class="btn btn-success me-2" :to="`/products/${product.id}`"
                    >查看</RouterLink
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          目前有 <span>{{ products.length }}</span> 項產品
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
      tempProduct: {},
      categories: ['主餐', '輕食', '果昔碗', '飲品']
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
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-item .nav-link {
  font-weight: 400;
  border-bottom: 4px solid transparent;
}

.nav-item .nav-link:focus {
  color: #698f39;
  border-bottom: 4px solid #698f39;
}

.nav-item .router-link-exact-active {
  color: #698f39;
  border-bottom: 4px solid #698f39;
}

// .nav-item .nav-link.active {
//   color: #698f39;
//   border-bottom: 4px solid #698f39;
// }

.router-link.active {
  color: #698f39;
  border-bottom: 4px solid #698f39;
}
</style>
