import { defineStore } from 'pinia';

export default defineStore('loadingStore', {
  state: () => ({
    isLoading: false,
    loadingStatus: '',
    cartLoading: false
  }),
  actions: {
    loading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
      console.log('HIII');
    },
    wholeLoading() {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.load,
        canCancel: true,
        onCancel: this.onCancel
      });
      setTimeout(() => {
        loader.hide();
      }, 3000);
    }
  }
});
