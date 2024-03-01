<template>
  <div
    id="modalOrder"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" style="width: 900px">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="orderModalLabel" class="modal-title">
            <span>訂單內容</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- body -->
        <div class="modal-body">
          <div class="row">
            <div>
              <h3 class="col-md-2">訂單資訊</h3>
              <div class="row">
                <div class="col-md-4">
                  <label for="orderId" class="form-label">訂單編號</label>
                  <input
                    id="orderId"
                    v-model="editOrder.id"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="col-md-3">
                  <label for="create_at" class="form-label">訂購日期</label>
                  <input
                    id="create_at"
                    v-model="editOrder.create_at"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="col-md-2">
                  <label for="num" class="form-label">數量</label>
                  <input
                    id="num"
                    v-model="editOrder.num"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="col-md-4">
                  <label class="form-check-label">帳款狀態</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      v-model="editOrder.is_paid"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      <span v-if="editOrder.is_paid">已付款</span>
                      <span v-else>未付款</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="row mt-5">
                <h3>會員資訊</h3>

                <div class="mb-3 col-md-2">
                  <label for="name" class="form-label">名稱</label>
                  <input
                    id="name"
                    v-model="editOrder.user.name"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="mb-3 col-md-2">
                  <label for="phone" class="form-label">電話</label>
                  <input
                    id="phone"
                    v-model="editOrder.user.tel"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>

                <div class="mb-3 col-md-3">
                  <label for="email" class="form-label">電子信箱</label>
                  <input
                    id="email"
                    v-model="editOrder.user.email"
                    type="text"
                    class="form-control"
                    readonly
                  />
                </div>
              </div>
              <div class="mb-3 col-md-8">
                <label for="address" class="form-label">寄送地址</label>
                <input
                  id="address"
                  v-model="editOrder.user.address"
                  type="text"
                  class="form-control"
                  readonly
                />
              </div>
              <div class="row mt-5">
                <h3>訂購商品</h3>
                <div class="px-3">
                  <table class="table align-middle table-sm" style="width: 800px">
                    <thead class="table-light">
                      <tr>
                        <td>商品編號</td>
                        <td>商品名稱</td>
                        <td class="text-end">商品數量</td>
                        <td class="text-end">小計</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in editOrder.products" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.product.title }}</td>
                        <td class="text-end">{{ item.qty }}</td>
                        <td class="text-end">{{ item.total }}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="3" class="text-end">總計</td>
                        <td class="text-end">{{ editOrder.total }}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            關閉
          </button>
          <!-- <button type="button" class="btn btn-primary" @click="updateOrder">確認</button> -->
          <button type="button" class="btn btn-primary" @click="$emit('update-paid', editOrder)">
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';
export default {
  props: ['tempOrder', 'updatePaid'],
  data() {
    return {
      modalOrder: null,
      editOrder: {
        user: {}
      },
      modal: '',
      isPaid: false
    };
  },
  emits: ['update-paid'],
  mixins: [modalMixin],
  methods: {},
  mounted() {},
  watch: {
    tempOrder() {
      this.editOrder = this.tempOrder;
    }
  }
};
</script>

<style lang="scss" scoped></style>
