function registro(){
   const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  iconColor: '#bde0fe',
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'Exito',
  title: 'Registro completo'
})
}






