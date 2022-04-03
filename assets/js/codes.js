function validar(){

    var nombre, Apellido_R, correo, contraseña, teléfono, documento,  expresión1,expresión2 ,expresión3,  genero , tipo_d;
    var nombre = document.getElementById('nombre').value;
    var Apellido_R = document.getElementById("Apellido_R").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var teléfono = document.getElementById("teléfono").value;
    var documento = document.getElementById("documento").value;
    var genero = document.getElementById("genero").value;
    var tipo_d = document.getElementById("tipo_d").value;
    expresión1 = /\w+@\w+\.[a-zA-Z]/;
    expresión2 = /\d{7,10}$/;
    expresión3 = /\d$/;
    
    if(nombre==0){
        Swal.fire("Ingrese el nombre");
        return false;
    }
    if (nombre.length>15){
        Swal.fire("El nombre es muy largo");
        return false;
    }
    if(Apellido_R==0){
        Swal.fire("Ingrese el un apellido");
        return false;
    }
    if (Apellido_R.length>20){
        Swal.fire("El apellido es muy largo");
        return false;
    }
    if(correo==0){
        Swal.fire("Ingrese un correo");
        return false;
    }
    if(!expresión1.test(correo)){
        Swal.fire("El correo no es valido");
        return false;
    }
    if(teléfono==0){
        Swal.fire("Ingrese un número de teléfono");
        return false;
    }
    if(!expresión2.test(teléfono)){
        Swal.fire("El número de teléfono no es valido");
        return false;
    }   
    if(contraseña==0){
        Swal.fire("Ingrese una contraseña");
        return false;
    }
    if(genero==0){
        Swal.fire("Debe seleccionar un género");
        return false;
    }
    if(documento==0){
        Swal.fire("Ingrese su número de documento");
        return false;
    }
    
    if(!expresión3.test(documento)){
        Swal.fire("El número de documento no es valido");
        return false;
    }   

    if(tipo_d==0){
        Swal.fire("Debe seleccionar un tipo de documento");
        return false;
    }
    
    

}


function validarl(){

    var loginl, contraseñal;

    var loginl = document.getElementById('loginl').value;
    var contraseñal = document.getElementById("contraseñal").value;
    if(loginl==0){
        Swal.fire("Ingrese el usuario, correo o teléfono.");
        return false;
    }
    if(contraseñal==0){
        Swal.fire("Ingrese su contraseña");
        return false;
    }

}

function validarC() {

    var correo_R , expresión4; 
    var correo_R = document.getElementById("correo_R").value;
    expresión4=/\w+@\w+\.[a-zA-Z]/;
    
    if(correo_R==0){
        Swal.fire("Ingrese un correo");
        return false;
    }
    if(!expresión4.test(correo_R)){
        Swal.fire("El correo no es valido");
        return false;
    }
    if(correo_R){
        Swal.fire("Recuperación de contraseña atraves del correo registrado");
        return false;
    }
    
}


function validarac() {

    var names, lastn, display_name , email, currentpwd , newpwd , confirmpwd, expresión1;
    var names = document.getElementById('names').value;
    var lastn = document.getElementById("lastn").value;
    var display_name = document.getElementById("display_name").value;
    var email = document.getElementById("email").value;
    var currentpwd = document.getElementById("currentpwd").value;
    var newpwd = document.getElementById("newpwd").value;
    var confirmpwd = document.getElementById("confirmpwd").value;
    expresión1 = /\w+@\w+\.[a-zA-Z]/;
    
    
    if(names==0){
        Swal.fire("Ingrese el nombre");
        return false;
    }
    if (names.length>15){
        Swal.fire("El nombre es muy largo")
        return false;
    }
    if(lastn==0){
        Swal.fire("Ingrese el un apellido");
        return false;
    }
    if (lastn.length>20){
        Swal.fire("El apellido es muy largo");
        return false;
    }
    if(display_name==0){
        Swal.fire("Ingrese el nombre Usuario");
        return false;
    }
    if (display_name.length>15){
        Swal.fire("El nombre es muy largo");
        return false;
    }
    if(email==0){
        Swal.fire("Ingrese un correo");
        return false;
    }
    if(!expresión1.test(email)){
        Swal.fire("El correo no es valido");
        return false;
    }
    if(currentpwd==0){
        Swal.fire("Ingrese la contraseña actual");
        return false;
    }
    if(newpwd==0){
        Swal.fire("Ingrese la nueva contraseña");
        return false;
    }
    if(confirmpwd==0){
        Swal.fire("Debe confirmar la contraseña");
        return false;
    }
    
    if (names && lastn && display_name &&  email && currentpwd &&  newpwd &&  confirmpwd && expresión1) {
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
            title: 'Datos Actualizados Exitosamente'
        })
    return false;
    }

}

function revalidar(){

    var nombrer, Apellidor, correor, direccionr, rpueblo , Cod_Post, teléfonore,  expresión1, expresión2;
    var nombrer = document.getElementById('nombrer').value;
    var Apellidor = document.getElementById("Apellidor").value;
    var correor = document.getElementById("correor").value;
    var direccionr = document.getElementById("direccionr").value;
    var rpueblo = document.getElementById("rpueblo").value;
    var Cod_Post = document.getElementById("Cod_Post").value;
    var teléfonore = document.getElementById("teléfonore").value;
    expresión1 = /\w+@\w+\.[a-zA-Z]/;
    expresión2 = /\d{7,10}$/;
    
    if(nombrer==0){
        Swal.fire("Ingrese el nombre");
        return false;
    }
    if (nombrer.length>15){
        Swal.fire("El nombre es muy largo");
        return false;
    }
    if(Apellidor==0){
        Swal.fire("Ingrese el un apellido");
        return false;
    }
    if (Apellidor.length>20){
        Swal.fire("El apellido es muy largo");
        return false;
    }
    if(correor==0){
        Swal.fire("Ingrese un correo");
        return false;
    }
    if(!expresión1.test(correor)){
        Swal.fire("El correo no es valido");
        return false;
    }
    if(direccionr==0){
        Swal.fire("Ingrese su dirección");
        return false;
    }
    if(rpueblo==0){
        Swal.fire("Ingrese su Pueblo / Ciudad");
        return false;
    }
    if(Cod_Post==0){
        Swal.fire("Ingrese su codigo postal");
        return false;
    }
    if(teléfonore==0){
        Swal.fire("Ingrese un número de teléfono");
        return false;
    }
    if(!expresión2.test(teléfono)){
        Swal.fire("El número de teléfono no es valido");
        return false;
    }   

    if (nombrer && Apellidor && correor && direccionr && rpueblo && Cod_Post && teléfonore && expresión1 && expresión2) {
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
            title: 'Datos Actualizados Exitosamente'
        })
    return false;
    }
}
