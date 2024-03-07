<template>
  <swiper
    :modules="modules"
    :loop="true"
    :speed="800"
    :breakpoints="swiperOptions.breakpoints"
    :pagination="{ el: '.swiper-pagination', clickable: true }"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
  >
    <swiper-slide>
      <div class="swiper-card bg-white p-4 rounded-3 mb-3 mb-md-4 mb-lg-5">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FBetty.png?alt=media&token=d8818071-69b2-4255-b3fc-f6d411b08dcc"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-1">Betty</p>
            <span v-for="i in 4" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
              />
            </span>
            <span class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_gray.png?alt=media&token=85305331-d373-4664-b58f-8be603d79fff"
                alt="star-gray"
                width="20"
                height="20"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">
          店員態度親切，而且廚師的手藝真的是一流的，每一道菜都好吃。推薦給所有喜愛蔬食的朋友！
        </p>
      </div>
      <div class="swiper-card bg-white p-4 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FCooper.png?alt=media&token=e16c3397-fcfd-4087-924b-8c9b0169418d"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-2">Cooper</p>
            <span v-for="i in 5" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
                class="img-fluid"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">食材的非常新鮮，也沒有過度調味</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-card swiper-card bg-white p-4 rounded-3 mb-3 mb-md-4 mb-lg-5">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FJessica.png?alt=media&token=0a1cd612-a097-4654-a1bf-f71e4670462e"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-1">Jessica</p>
            <span v-for="i in 5" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">
          朋友推薦的，今天跟著來嘗鮮。點了綜合莓果果昔，甜度剛剛好，以後會常常來買~
        </p>
      </div>
      <div class="swiper-card bg-white p-4 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FLuke.png?alt=media&token=53192fac-e508-4fed-8cc9-2c1492c2714b"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-2">Luke</p>
            <span v-for="i in 5" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
                class="img-fluid"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">麵體Q彈有嚼勁，而且是間裝潢有質感的小店，CP值超高！</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-card swiper-card bg-white p-4 rounded-3 mb-3 mb-md-4 mb-lg-5">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FJohn.png?alt=media&token=9edcf015-d6ab-47f5-8a14-9c0d8e207fad"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-1">John</p>
            <span v-for="i in 5" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">這間店沙拉好吃到沒話說，是我吃過最好吃的蔬食餐廳，沒有之一！</p>
      </div>
      <div class="swiper-card bg-white p-4 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FRay.png?alt=media&token=e8070407-a596-4d42-a0c0-5836c6113a03"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-2">Ray</p>
            <span v-for="i in 4" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
                class="img-fluid"
              />
            </span>
            <span class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_gray.png?alt=media&token=85305331-d373-4664-b58f-8be603d79fff"
                alt="star-gray"
                width="20"
                height="20"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">主食類口味很棒，整體環境整潔舒適，是跟朋友小聚的好地方</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-card swiper-card bg-white p-4 rounded-3 mb-3 mb-md-4 mb-lg-5">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FJune.png?alt=media&token=3799d845-3f22-4d15-a666-859057a06574"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-1">June</p>
            <span v-for="i in 5" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">氣氛好，美食佳，連平常不喜歡吃蔬菜的兒子都很喜歡</p>
      </div>
      <div class="swiper-card bg-white p-4 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FJack.png?alt=media&token=3c068d39-5c19-4ea9-ab78-fdc33cbe3a0b"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-2">Jack</p>
            <span v-for="i in 4" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
                class="img-fluid"
              />
            </span>
            <span class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_gray.png?alt=media&token=85305331-d373-4664-b58f-8be603d79fff"
                alt="star-gray"
                width="20"
                height="20"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">很有特色的平價蔬食餐廳，平常午休時間經常跟同事一起來吃</p>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-card swiper-card bg-white p-4 rounded-3 mb-3 mb-md-4 mb-lg-5">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FFern.png?alt=media&token=82e88a72-5ebe-4d4a-a818-b511ccb2cceb"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-1">Fern</p>
            <span v-for="i in 5" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">隱藏在巷弄裡的精緻小店，裝潢很網美，好拍又好吃！</p>
      </div>
      <div class="swiper-card bg-white p-4 rounded-3 mb-0">
        <div class="d-flex gap-3 mb-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Avatar%2FLeaf.png?alt=media&token=6195b8e3-498d-45a9-aa98-2f475f3b320d"
            alt="avatar"
            width="56"
            height="56"
            class="rounded-circle"
          />
          <div>
            <p class="mb-2">Leaf</p>
            <span v-for="i in 5" :key="i + 123" class="mx-1">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FStars%2Fstar_yellow.png?alt=media&token=bb8216a5-3636-41d3-aadd-ac9c9159bb7e"
                alt="star-yellow"
                width="20"
                height="20"
                class="img-fluid"
              />
            </span>
          </div>
        </div>
        <p class="mb-0 line-clamp">煎餅真的推！店員也很親切，就算人潮滿滿也總是面帶微笑</p>
      </div>
    </swiper-slide>

    <div class="swiper-pagination position-static mt-5 mt-lg-10"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

export default {
  data() {
    return {
      modules: [Pagination, Autoplay],
      swiperOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          576: {
            slidesPerView: 1.2,
            spaceBetween: 16
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 12
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 12
          }
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style lang="scss">
.swiper-card {
  max-width: 500px;
  height: 200px;
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  text-align: center;
  opacity: 1;
  background: #d9d9d9;
  margin: 0 8px !important;
}
.swiper-pagination-bullet-active {
  background: #4f8147;
}
</style>
