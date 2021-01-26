import Vue from 'vue'

/**
 * 선언부
 * import {swalToastAlert, swalConfirm} from "@/plugins/custom-swal.js" 
 */

// toastAlert (우측상단)
// icon : success, error, warning
const swalToastAlert = (options) => {
    const Toast = Vue.swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Vue.swal.stopTimer)
        toast.addEventListener('mouseleave', Vue.swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: options.icon || 'success',
        title: options.title || '성공하였습니다.'
    })
}
// ex
// swalToastAlert({title: '내용'}) // icon : success
// swalToastAlert({icon: 'error', title: e}) // .catch(e)

// confirm
const swalConfirm = async (options) => {
    return Vue.swal({
        title: '정말로 삭제하시겠습니까?' || options.title,
        text: '삭제된 항목은 복구되지 않습니다.' || options.text,
        icon: 'warning' || options.icon,
        confirmButtonText: '삭제' || options.confirmButtonText,
        cancelButtonText: '취소' || options.cancelButtonText,
        showCancelButton: true,
        showCloseButton: true,
        showLoaderOnConfirm: true
    })
}
// ex
// swalConfirm().then( async (result)=>{
//     if(result.value){
//       ...
//       // 삭제
//     }else{
//       ...
//       // 취소
//     }
//   })


export {
    swalToastAlert,
    swalConfirm,
}