<template>
  <div class="row">
    <h1 class="mt-3">{{ title }}</h1>
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
                class="btn btn-outline-primary btn-sm"
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
  <Order-Modal ref="orderModal" :temp-order="tempOrder" @update-paid="updatePaid"></Order-Modal>
  <!-- <Del-Order-Modal
    ref="delOrderModal"
    :temp-order="tempOrder"
    :del-order="delOrder"
  ></Del-Order-Modal> -->
</template>

<script>
import axios from 'axios';
import OrderModal from '../../components/admin/OrderModal.vue';
// import DelOrderModal from '../../components/admin/DelOrderModal.vue';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;
export default {
  components: {
    OrderModal
    // DelOrderModal
  },
  data() {
    return {
      title: '訂單管理',
      orders: [],
      currentPage: 1,
      tempOrder: {
        user: {}
      }
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      const url = `${VITE_API_URL}/api/${VITE_API_PATH}/admin/orders`;
      axios
        .get(url)
        .then((res) => {
          // console.log(res);
          this.orders = res.data.orders;
          // console.log(this.orders);
        })
        .catch(() => {
          alert('取得訂單資訊失敗');
        });
    },
    openModal(status, order) {
      if (status === 'edit') {
        this.tempOrder = { ...order };
        // this.$refs.orderModal.openModal();
        console.log(this.tempOrder);
        const orderComponent = this.$refs.orderModal;
        orderComponent.openModal();
      } else if (status === 'delete') {
        this.tempOrder = { ...order };
        this.$refs.delOrderModal.openDelModal();
      }
    },
    updatePaid(item) {
      const url = `${VITE_API_URL}/api/${VITE_API_URL}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid
      };
      axios
        .put(url, { data: paid })
        .then((res) => {
          console.log(res.data);
          alert('新增/修改成功');
          const orderComponent = this.$refs.orderModal;
          orderComponent.hideModal();

          this.getOrders(this.currentPage);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    delOrder() {
      const url = `${VITE_API_URL}/orders/${this.tempOrder.id}`;
      axios
        .delete(url)
        .then((res) => {
          console.log(res.data);
          this.$refs.delOrderModal.closeDelModal();
          this.getOrders();
        })
        .catch(() => {
          alert('刪除失敗');
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
