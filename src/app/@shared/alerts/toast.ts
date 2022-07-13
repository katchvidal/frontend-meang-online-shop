

import Swal from "sweetalert2";
import { TYPE_ALERT } from "./values.config";

export function basicAlert( icon = TYPE_ALERT.SUCCESS, title : string = '' ){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })  
      Toast.fire({
        icon,
        title
      })
}