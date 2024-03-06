<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div class="col-2 bg-light-green pt-5">
        <div class="text-center">
          <img src="/images/Logo-Vegan-Moment.png" alt="logo" class="img-fluid mb-6 px-2 logo" />
        </div>
        <ul class="nav flex-column px-2">
          <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link">產品管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/orders" class="nav-link">訂單管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/coupons" class="nav-link">優惠券管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">回前台首頁</RouterLink>
          </li>

          <li class="nav-item mt-5">
            <a href="#" class="nav-link d-flex align-items-center" @click.prevent="logout"
              ><span class="material-icons"> logout </span>登出</a
            >
          </li>
        </ul>
      </div>
      <div class="col-10 py-5">
        <RouterView v-if="checkSuccess"></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
const { VITE_API_URL } = import.meta.env;
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      checkSuccess: false
    };
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)adminToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

    axios.defaults.headers.common.Authorization = token;
    // this.checkLogin();
  },
  methods: {
    checkLogin() {
      const url = `${VITE_API_URL}/api/user/check`;
      axios
        .post(url)
        .then((res) => {
          console.log('驗證成功：', res.data.success);
          this.checkSuccess = true;
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.$router.push('/adminLogin');
        });
    },
    logout() {
      document.cookie = `adminToken=0; expires=${new Date('2000/1/1 12:00')}; path=/`;

      Swal.fire({
        title: '無授權，請重新登入',
        text: '',
        icon: 'error'
      });

      this.$router.push('/adminLogin');
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-link {
  font-weight: 500;
  border-left: 4px solid transparent;
  margin-top: 20px;
}
.nav-link.active {
  border-left: 4px solid #698f39;
  font-weight: bold;
}
.logo {
  width: 150px;
}
</style>
