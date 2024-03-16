import Swal from 'sweetalert2';
// import Toast from '@/mixins/swal.js';
// Swal.mixin
export default {
  toastTop(title, icon) {
    return Swal.fire({
      title,
      icon,
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1500,
      width: 250
    });
  }
};
