function guardar() {
    var check = document.getElementById("aceptado").checked; // Cambiado a "checked"
    var usuario = $("#usuario").val();
    var password = $("#pass").val();
    var genero = $("input[name='genero']:checked").val();

    if (check){
        if (usuario.length < 8) { // Verifica longitud del usuario
            alert("El usuario debe tener más de 8 caracteres");
            document.getElementById("usuario").focus();
            return false;
        }else if (password.length < 8) { 
            alert("El password debe tener más de 8 caracteres");
            document.getElementById("pass").focus();
            return false;
        }else{
            alert('los datos se ingresaron correctamente '+ usuario + " " + genero)
            return true;
        }
    }else{
        alert("Aun no ha aceptado los terminos y condiciones");
        return false;
    }
}