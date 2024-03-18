import Swal from 'sweetalert2';

export default {
  toastTop(title, icon) {
    return Swal.fire({
      title,
      icon,
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 1500,
      width: 280
    });
  }
};
