<template>
  <div class="slider-box">
    <swiper
      :modules="modules"
      :navigation="navigation"
      :loop="true"
      :speed="800"
      :breakpoints="swiperOptions.breakpoints"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
      <template v-for="product in products" :key="product.id">
        <template v-if="product.is_hot === 1">
          <swiper-slide>
            <div class="position-relative hover-show-btn">
              <div class="pic">
                <RouterLink :to="`/products/${product.id}`" class="pic">
                  <img
                    :src="product.imageUrl"
                    :alt="product.title"
                    class="w-100 d-block rounded-3"
                  />
                </RouterLink>
                <button
                  type="button"
                  class="add-to-cart-btn btn btn-secondary position-absolute bottom-0 start-50 translate-middle py-2 fs-5"
                  :disabled="loadingProductId === product.id"
                  @click="addToCart(product.id, cartQty)"
                >
                  <span>加入購物車</span>
                  <i
                    class="fas fa-spinner fa-pulse ms-2"
                    v-if="loadingProductId === product.id"
                  ></i>
                </button>
              </div>
            </div>
            <RouterLink :to="`/products/${product.id}`">
              <div class="py-3 py-lg-4">
                <h4 class="fs-5 fs-lg-4 text-dark mb-2 mb-lg-3">{{ product.title }}</h4>
                <h5 class="text-primary d-flex align-items-center">
                  NT${{ $filters.currency(product.price) }}
                  <span class="fs-6 text-gray-dark ms-2"
                    ><del>NT${{ $filters.currency(product.origin_price) }}</del></span
                  >
                </h5>
              </div>
            </RouterLink>
          </swiper-slide>
        </template>
      </template>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { mapState, mapActions } from 'pinia';

import productStore from '@/stores/productStore.js';
import cartStore from '@/stores/cartStore.js';
import loadingStore from '../../stores/loadingStore';

import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
  data() {
    return {
      cartQty: 1,
      modules: [Navigation, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      swiperOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          375: {
            slidesPerView: 1.6,
            spaceBetween: 16
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 16
          }
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    ...mapState(productStore, ['products']),
    ...mapState(loadingStore, ['loadingProductId'])
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart'])
  }
};
</script>

<style lang="scss" scoped>
.slider-box {
  position: relative;
}
.swiper-button-next,
.swiper-button-prev {
  @include mobile() {
    display: none;
  }
}
.swiper-button-prev {
  background: url(../../../public/icons/previous_arrow.png) center center no-repeat;
  background-size: 45px 45px;
  top: 110px;
  left: -90px;
  width: 90px;
  height: 90px;
  color: transparent;
}
.swiper-button-next {
  background: url(../../../public/icons/next_arrow.png) center center no-repeat;
  background-size: 45px 45px;
  top: 110px;
  right: -90px;
  width: 90px;
  height: 90px;
  color: transparent;
}
.swiper-slide img {
  height: 200px;
  @include mobile() {
    height: 200px;
  }
}

.add-to-cart-btn {
  display: none;
}
.hover-show-btn:hover {
  .add-to-cart-btn {
    display: block;
    width: 90%;
  }
}

.pic:before {
  content: '';
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.4s ease;
}
.pic:hover:before {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
