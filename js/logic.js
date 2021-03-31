
//Boton Up

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.expandir').classList.add('show');
    }else{
        document.querySelector('.expandir').classList.remove('show');
    }
}

document.querySelector('.expandir').addEventListener('click',() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//Validar Formulario

// function campoRequerido(elemento){
//     let expresion = /[A-Za-z]/;
//     if(elemento.value != "" && expresion.test(elemento.value)){//si esta vacio
//         elemento.className = "form-control is-valid";
//     }else{
//         elemento.className = "form-control is-invalid";
//     }
// }

// function validarMail(elemento){
//     let expresionRegular = /\w+@\w+\.[a-z A-Z]/;
//     if(elemento.value != "" && expresionRegular.test(elemento.value)){//si esta vacio
//         elemento.className = "form-control is-valid";
//     }else{
//         elemento.className = "form-control is-invalid";
//     }
// }

// function revisarConsulta(elemento){
//     let expresion = /[A-Za-z]/;
//     let cantidad = elemento.value;
//     if(cantidad.length >=10 && expresion.test(elemento.value)){//si esta vacio
//         elemento.className = "form-control is-valid";
//     }else{
//         elemento.className = "form-control is-invalid";
//     }
// }

/**Validacion de Formulario 2.5 */

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const mensaje = document.getElementById('mensaje');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{10,250}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    mensaje: /^[a-zA-ZÀ-ÿ\s]{10,250}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	// correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    correo: /\w+@\w+\.[a-z A-Z]/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos ={
    nombre: false,
    correo: false,
    mensaje: false
}
const validarForm = (e) =>{
    switch(e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('iconoN').classList.remove('validacion__estado-activo');
                document.getElementById('erroN').classList.remove('p__error-activo');
                campos['nombre'] = true;
            }else{
               document.getElementById('iconoN').classList.add('validacion__estado-activo');
               document.getElementById('erroN').classList.add('p__error-activo');
               campos['nombre'] = false;
            }
            
        break;
        case "email":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('iconoC').classList.remove('validacion__estado-activo');
                document.getElementById('erroC').classList.remove('p__error-activo');
                campos['correo'] = true;
            }else{
               document.getElementById('iconoC').classList.add('validacion__estado-activo');
               document.getElementById('erroC').classList.add('p__error-activo');
               campos['correo'] = false;
            }
        break;
        case "mensaje":
            if(expresiones.mensaje.test(e.target.value)){
                document.getElementById('iconoM').classList.remove('validacion__estado-M-activo');
                document.getElementById('erroM').classList.remove('p__error-activo');
                campos['mensaje'] = true;
            }else{
               document.getElementById('iconoM').classList.add('validacion__estado-M-activo');
               document.getElementById('erroM').classList.add('p__error-activo');
               campos['mensaje'] = false;
            }
        break;
    }
}

mensaje.addEventListener('blur',validarForm);
mensaje.addEventListener('keyup',validarForm)
inputs.forEach((input) =>{
    input.addEventListener('keyup',validarForm);
    input.addEventListener('blur',validarForm);
})


formulario.addEventListener('submit', (e) =>{
    // e.preventDefault();
    if(campos.nombre && campos.correo && campos.mensaje){
        formulario.reset();   
    }
    else{
        document.getElementById('advertencia').classList.add('advertencia-active');
    }
})






// let nombre = document.getElementById('nombre');
// let email = document.getElementById('email');
// let mensaje = document.getElementById('mensaje');

// nombre.addEventListener('blur',(e) =>{
//      let expresion = /[a-zA-Z0-9]/;
//     if(nombre.value.trim() == expresion.test(nombre.value) && nombre.value.trim() != isNaN){
//         console.log('INgrese un nombre valido')
//     }else{
//         console.log('Perfecto Nombre valido')
//     }
     
// });

// email.addEventListener('blur',e =>{
//     let expresionRegular = /\w+@\w+\.[a-z A-Z]/;
//     if(email.value.trim() !== expresionRegular.test(email.value)){
//         email.className = "form-control is-valid";
//         console.log('email Incorrecto')
//     }else{
//         email.className = "form-control is-invalid";
//         console.log('email correcto')
//     }
    
// })

// mensaje.addEventListener('blur', e =>{
//     let expresion = /[A-Za-z]/;
//     let cantidad = mensaje.value;
//     if(cantidad.length >=10 && expresion.test(mensaje.value)){//si esta vacio
//         mensaje.className = "form-control is-valid";
//     }else{
//         mensaje.className = "form-control is-invalid";
//     }
//     //console.log(mensaje.value)
// })


