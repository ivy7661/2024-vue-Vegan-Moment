<template>
  <VueLoading v-model:active="isLoading" :is-full-page="fullPage" />
  <!-- <section class="mb-5 banner" style="height: 380px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-plan fs-3 fs-lg-2">關於我們</h1>
        </div>
      </div>
    </div>
  </section> -->
  <div class="container" ref="load">
    <nav>
      <ol class="breadcrumb mb-5 mt-3">
        <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/brandStory" class="text-dark">品牌故事</RouterLink>
        </li>
      </ol>
    </nav>
    <section>
      <div class="row justify-content-between mb-4 mb-lg-10">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Images%2FDifferent_vegetables.jpg?alt=media&token=82bbcbcb-7979-4d63-93f3-5552a9c0431f"
            alt="vegan food"
            class="img-fluid"
            data-aos="fade-down"
            data-aos-once="true"
            width="600"
            height="400"
          />
        </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center h-100">
            <p class="fs-5" data-aos="fade-up" data-aos-once="true">
              Vegan Moment 創立於 2023 年，
              起源於對健康和環境的熱愛。創辦人深受素食生活方式啟發，開啟了這場以蔬食為主題的美食之旅。我們一直以來秉持著堅持<span
                class="text-primary"
                >新鮮、創意、專業</span
              >的精神，透過不同的烹飪技巧和調味方式，呈現出一系列獨一無二的美味。
            </p>
          </div>
        </div>
      </div>
      <div class="row flex-lg-row-reverse justify-content-between mb-4 mb-lg-17">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="text-end">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Images%2Fpreparing_food.jpg?alt=media&token=57c20a0e-aa16-4989-a5fc-48e4ea1c53ae"
              alt="vegan food"
              class="img-fluid"
              width="600"
              height="400"
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="800"
            />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center h-100">
            <div class="fs-5">
              <p data-aos="fade-up" data-aos-delay="50" data-aos-once="true">
                在「追求健康」的理念下，我們的廚師團隊深信，美味絕不應該以健康為代價。<span
                  class="text-primary"
                  >我們不僅以健康食材為基礎，更將烹飪理念延伸至「少油少鹽」的原則，堅守不添加任何人工色素和味精的承諾。</span
                >
              </p>
              <p data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                我們選擇最優質的食材，結合烹飪的巧思，呈現的不僅是美味佳餚，更是一種對身體健康的用心呵護。每一口都是對健康的承諾，為顧客帶來一場將健康和美味完美結合的獨特饗宴。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between mb-8 mb-lg-20">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Images%2Feco_puzzle.jpg?alt=media&token=e86e2de2-65cd-42ad-909f-126e4fab84b5"
            alt="eco"
            class="img-fluid"
            width="750"
            height="400"
            data-aos="fade-down"
            data-aos-once="true"
          />
        </div>
        <div class="col-lg-5">
          <div class="d-flex align-items-center h-100">
            <p class="fs-5" data-aos="fade-up" data-aos-once="true">
              秉持為環境出一分力的使命，我們積極採取多項環保措施，從使用可分解餐具到有效減少食物浪費，全方位實踐對地球的愛護。透過實際的行動，我們致力於維護生態平衡，呼籲更多人參與可持續生活的行動。每一個減少的塑料垃圾、每一道環保採購的食材，都是我們對環境的回饋，期望能夠激發更多人投入共同守護地球的行列。
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { mapState, mapActions } from 'pinia';
import loadingStore from '@/stores/loadingStore.js';

export default {
  data() {
    return {
      isLoading: false
    };
  },
  components: {
    VueLoading
  },
  mounted() {
    this.loading();
  },
  computed: {
    ...mapState(loadingStore, ['isLoading'])
  },
  methods: {
    ...mapActions(loadingStore, ['loading'])
  }
};
</script>
