<template>
  <div class="modal fade" ref="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-white" id="exampleModalLabel">刪除優惠券</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          確認刪除優惠券 <span class="text-danger"> {{ coupon.title }}</span> ？（刪除後將無法恢復）
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger" @click="$emit('deleteCoupon')">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../../mixins/modalMixin';
export default {
  props: ['coupon'],
  data() {
    return {
      modal: ''
    };
  },
  mixins: [modalMixin]
};
</script>
