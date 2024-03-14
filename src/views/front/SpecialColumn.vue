<template>
  <div class="container d-flex flex-column justify-content-center container-post">
    <nav>
      <ol class="breadcrumb mb-1 mt-3">
        <li class="breadcrumb-item"><RouterLink to="/" class="fs-6">首頁</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/articles" class="text-dark fs-6">專欄文章</RouterLink>
        </li>
      </ol>
    </nav>
    <div class="row mb-5">
      <div
        class="col-12 col-lg-4 mb-3 mb-lg-0 d-flex justify-content-center gy-5"
        v-for="article in articles"
        :key="article.id"
      >
        <div class="card border-0 bg-white-2" data-aos="fade-up">
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
            <p class="text-black shortContent">
              {{ article.description }}
            </p>
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
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;

export default {
  name: 'HomePosts',
  data() {
    return {
      articles: [],
      tempArticle: {}
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/articles`;
      axios
        .get(url)
        .then((res) => {
          this.articles = res.data.articles;
          console.log(this.articles);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
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
