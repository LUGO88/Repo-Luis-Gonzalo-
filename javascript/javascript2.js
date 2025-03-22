var contenedor = document.getElementById("contenido");
contenedor.innerText = "Este mensaje viene de javascript";

function mostrarMensaje() {
    alert("Hola, JavaScript es divertido");
}

function leerValor(){
    const imput = document.getElementById('unImput');
    const valor = imput.value;
    alert("El valor es" + valor);
}