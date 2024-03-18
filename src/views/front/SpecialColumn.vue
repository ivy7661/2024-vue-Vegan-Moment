<template>
  <section class="mb-3 banner" style="height: 250px">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-9 col-md-7 col-lg-5">
          <h1 class="banner-text fs-3">專欄文章</h1>
        </div>
      </div>
    </div>
  </section>
  <div class="container d-flex flex-column justify-content-center container-post">
    <VueLoading :active="isLoading" :is-full-page="fullPage">
      <template #default>
        <VeganLoader />
      </template>
    </VueLoading>
    <nav>
      <ol class="breadcrumb mb-1">
        <li class="breadcrumb-item"><RouterLink to="/" class="fs-6">首頁</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/articles" class="text-dark fs-6">專欄文章</RouterLink>
        </li>
      </ol>
    </nav>
    <div class="row mb-5">
      <div
        class="col-12 col-lg-4 mb-lg-0 d-flex justify-content-center gy-5"
        v-for="article in articles"
        :key="article.id"
      >
        <div
          ref="load"
          class="card border-0 bg-white-2 vl-parent"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <img :src="article.image" class="card-img-top mw-100" alt="" />
          <div class="card-body">
            <h5 class="text-primary mb-2">{{ article.title }}</h5>
            <div class="d-flex flex-row">
              <p class="me-2" v-for="aTag in article.tag" :key="aTag">
                <span class="material-icons fs-6 me-1 text-gray-600"> sell </span>
                <span class="text-gray-600 fs-6 me-1">
                  {{ aTag }}
                </span>
              </p>
            </div>
            <p class="text-black shortContent" v-html="article.description"></p>
            <p class="text-end">
              <router-link :to="`/specialColumn/${article.id}`"
                >繼續閱讀
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/vegan-moment.appspot.com/o/Icons%2FArrows%2Fright_arrow_green.png?alt=media&token=ad11f9f6-32e5-4601-bd7d-d64b312ac282"
                  alt="Slider"
                  class="mb-1"
                  width="25"
                  height="25"
                />
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueLoading from 'vue-loading-overlay';
import VeganLoader from '../../components/icons/VeganLoader.vue';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      tempArticle: {},
      fullPage: true,
      isLoading: false
    };
  },
  components: { VeganLoader, VueLoading },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      this.isLoading = true;
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/articles`;
      axios
        .get(url)
        .then((res) => {
          this.isLoading = false;
          this.articles = res.data.articles;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  @include banner('/images/articles.jpg', 10% 40%);
  @include mobile() {
    @include banner('/images/articles.jpg', center);
  }
}
.banner-text {
  @include banner-text();
}
p,
a {
  font-size: 14px;
}
.card {
  background-color: transparent;
  max-width: 350px;
  height: 500px;
  border-radius: 24px;
}
.card-img-top {
  display: block;
  border-radius: 24px;
  max-height: 240px;
}
.container-post {
  position: relative;
}

.shortContent {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
@media (max-width: 375px) {
  .card {
    max-width: 310px;
  }
  .deco {
    max-width: 300px;
  }
}
</style>
