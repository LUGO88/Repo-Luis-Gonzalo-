function llamaDoubleClick(event) {
    cuadroMorado.textContent = 'Hiciste doble click en el cuadro morado';
}

function logEvent(eventos){
    console.log(`El evento ${eventos.type} fue disparado`);
}

function agregarClase(event){
    cuadroCyan.classList.add('claseNueva');
}

const cuadroMorado = document.querySelector('#miId');
cuadroMorado.textContent = 'Este texto viene de Javascript';
cuadroMorado.innerText = 'Este texto reemplaza a Javascript';
cuadroMorado.innerHTML = '<h1>Este es un titulo</h1>';

const cuadroCyan = document.querySelector('.miClase');
cuadroCyan.textContent = 'Contenido en miClase';

//vamos a los eventos

//forma anonima
cuadroMorado.addEventListener('click', () => {
    cuadroMorado.textContent = 'Hisciste click en el cuadro morado';	

});

//Con el nombre de una funcion
cuadroMorado.addEventListener('dblclick', llamaDoubleClick);
cuadroMorado.addEventListener('mouseover', logEvent);
//Agregamos 2 eventos mas con logEvent
cuadroMorado.addEventListener('mouseout', logEvent);
cuadroMorado.addEventListener('mousedown', logEvent);

cuadroCyan.addEventListener('click', agregarClase);