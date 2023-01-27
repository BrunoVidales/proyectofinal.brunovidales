document.getElementById ('form').addEventListener("submit", function(e) {
    let nombre = document.getElementById ('name').value;
    let emailIngresado = document.getElementById ('email').value;
    let mensajeIngresado = document.getElementById ('message').value;
    if (nombre == 0) {
        document.getElementById('nombre-b').style.display = 'block';      
        e.preventDefault ();
    }
    if (emailIngresado == 0) {
        document.getElementById('email-b').style.display = 'block';
        e.preventDefault ();
    } 
    if (mensajeIngresado == 0) {
        document.getElementById('mensaje-b').style.display = 'block';
        e.preventDefault ();
    }
});

//Scripts para el formulario (contactos)