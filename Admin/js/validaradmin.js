function validarad() {

    var actn, lnames ,eemails, pwr, telef, expresión1, expresión2;
    var actn = document.getElementById('actn').value;
    var lnames = document.getElementById("lnames").value;
    var eemails = document.getElementById("eemails").value;
    var pwr = document.getElementById("pwr").value;
    var telef = document.getElementById("telef").value;
    expresión1 = /\w+@\w+\.[a-zA-Z]/;
    expresión2 = /\d{7,10}$/;
    
    
    if(actn==0){
        Swal.fire("Ingrese el nombre");
        return false;
    }
    if (actn.length>15){
        Swal.fire("El nombre es muy largo")
        return false;
    }
    if(lnames==0){
        Swal.fire("Ingrese el un apellido");
        return false;
    }
    if (lnames.length>20){
        Swal.fire("El apellido es muy largo");
        return false;
    }
    if(eemails==0){
        Swal.fire("Ingrese un correo");
        return false;
    }
    if(!expresión1.test(eemails)){
        Swal.fire("El correo no es valido");
        return false;
    }
    if(pwr==0){
        Swal.fire("Ingrese la contraseña actual");
        return false;
    }
    if(telef==0){
        Swal.fire("Ingrese un número de teléfono");
        return false;
    }
    if(!expresión2.test(telef)){
        Swal.fire("El número de teléfono no es valido");
        return false;
    }   
    if (actn && lnames &&  eemails && pwr && telef && expresión1, expresión2) {
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
            icon: 'success',
            title: 'Datos Actualizados Correctamente'
        })
    return false;
    }

}
