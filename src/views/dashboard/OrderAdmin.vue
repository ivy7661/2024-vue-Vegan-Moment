<template>
  <h2 class="mt-2">訂單管理</h2>
  <div class="container">
    <div class="row">
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="120">訂單編號</th>
            <th width="120">會員名稱</th>
            <th width="120">帳款狀態</th>
            <th width="120">編輯訂單</th>
            <th width="120">刪除訂單</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="order in orders" :key="order.id">
            <tr v-if="orders.length" :class="{ 'text-secondary': !order.is_paid }">
              <td>{{ order.id }}</td>
              <td>{{ order.user.name }}</td>
              <td>
                <span v-if="order.is_paid" class="text-success">已付款</span>
                <span v-else>未付款</span>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="openModal('edit', order)"
                >
                  編輯
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete', order)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <!-- pagination -->
    <Pagination-Component :pages="pages" @change-page="getOrders"></Pagination-Component>

    <Order-Modal ref="orderModal" :temp-order="tempOrder" @update-paid="updatePaid"></Order-Modal>
    <Del-Order-Modal
      ref="delOrderModal"
      :temp-order="tempOrder"
      :del-order="delOrder"
    ></Del-Order-Modal>
  </div>
</template>

<script>
import axios from 'axios';
import Alert from '@/mixins/swal.js';
import OrderModal from '../../components/admin/OrderModal.vue';
import DelOrderModal from '../../components/admin/DelOrderModal.vue';
import PaginationComponent from '../../components/PaginationComponent.vue';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;
export default {
  components: {
    OrderModal,
    DelOrderModal,
    PaginationComponent
  },
  data() {
    return {
      orders: [],
      currentPage: 1,
      tempOrder: {
        user: {}
      },
      pages: {}
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/orders?page=${page}`;
      axios
        .get(url)
        .then((res) => {
          this.orders = res.data.orders;
          this.pages = res.data.pagination;
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message, 'error');
        });
    },
    openModal(status, order) {
      if (status === 'edit') {
        this.tempOrder = { ...order };
        console.log(this.tempOrder);
        const orderComponent = this.$refs.orderModal;
        orderComponent.openModal();
      } else if (status === 'delete') {
        this.tempOrder = { ...order };
        const delOrder = this.$refs.delOrderModal;
        delOrder.openModal();
      }
    },
    updatePaid(item) {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid
      };
      axios
        .put(url, { data: paid })
        .then((res) => {
          Alert.toastTop(res.data.message, 'success');
          const orderComponent = this.$refs.orderModal;
          orderComponent.closeModal();
          this.getOrders(this.currentPage);
        })
        .catch((err) => {
          Alert.toastTop(err.response.data.message);
        });
    },
    delOrder() {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/order/${this.tempOrder.id}`;
      axios
        .delete(url)
        .then((res) => {
          Alert.toastTop(res.data.message, 'success');
          const delModal = this.$refs.delOrderModal;
          delModal.closeModal();

          this.getOrders(this.currentPage);
        })
        .catch((err) => {
          console.log(err);
          Alert.toastTop(err.response.data.message, 'error');
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
