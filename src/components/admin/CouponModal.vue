<template>
  <div class="modal fade" ref="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-white" id="exampleModalLabel">
            {{ isNew ? '新增' : '編輯' }}優惠券
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="code" class="form-label">優惠券名稱</label>
              <input
                type="text"
                class="form-control"
                id="code"
                v-model="editCoupon.title"
                placeholder="請輸入優惠券名稱"
              />
            </div>
            <div class="mb-3">
              <label for="code" class="form-label">優惠碼</label>
              <input
                type="text"
                class="form-control"
                id="code"
                v-model="editCoupon.code"
                placeholder="請輸入優惠碼"
              />
            </div>
            <div class="mb-3">
              <label for="percent" class="form-label">折扣百分比</label>
              <input
                type="number"
                min="1"
                max="100"
                class="form-control"
                id="percent"
                v-model.number="editCoupon.percent"
                placeholder="請輸入折扣百分比（數字）"
              />
            </div>
            <div class="mb-3">
              <label for="date" class="form-label">使用期限</label>
              <input
                type="date"
                class="form-control"
                id="date"
                v-model="due_date"
                placeholder="請輸入使用期限"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="is_enabled"
                :true-value="1"
                :false-value="0"
                v-model="editCoupon.is_enabled"
              />
              <label for="is_enabled" class="form-check-label">是否啟用</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">取消</button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="$emit('updateCoupon', tempCoupon)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../../mixins/modalMixin';
export default {
  props: ['coupon', 'isNew'],
  data() {
    return {
      modal: '',
      editCoupon: {},
      due_date: ''
    };
  },
  mixins: [modalMixin],
  watch: {
    coupon() {
      this.editCoupon = this.coupon;
      const dateAndTime = new Date(this.editCoupon.due_date * 1000).toISOString().split('T');
      [this.due_date] = dateAndTime;
    },
    due_date() {
      this.editCoupon.due_date = Math.floor(new Date(this.due_date) / 1000);
    }
  }
};
</script>
