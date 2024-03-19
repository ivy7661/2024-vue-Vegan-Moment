<template>
  <!-- <h2>登入頁面</h2>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              v-model="user.username"
              id="floatingInput"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">登入</button>
        </form>
      </div>
    </div>
  </div> -->
  <div class="bg-light">
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100">
        <div class="col-4 bg-light-green" style="height: 450px">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-10">
              <div class="text-center">
                <img
                  src="../../../public/images/Logo_Vegan_Moment.png"
                  alt="logo"
                  class="logo mb-3"
                />
              </div>
              <h2 class="fs-5 text-center mb-3">後台管理系統</h2>
            </div>
          </div>
        </div>
        <div class="col-4 bg-white" style="height: 450px">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-9">
              <h2 class="fs-3 mb-2">管理者登入</h2>
              <h3 class="fs-6 mb-3"><small>觀迎回來，請登入您的帳號</small></h3>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Email address"
                  v-model="user.username"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="user.password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <button type="button" class="btn btn-secondary w-100 mb-3" @click="login">
                登入
              </button>
              <div class="text-center">
                <RouterLink to="/">回到首頁</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      axios
        .post(`${VITE_API_URL}/admin/signin`, this.user)
        .then((res) => {
          console.log(res);
          const { token, expired } = res.data;
          document.cookie = `adminToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin/products');
        })
        .catch((error) => {
          console.dir(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 250px;
}
</style>
