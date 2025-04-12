//MODULOS
function sayHello(nombre){
    return `Hola ${nombre}`;
}

function sayHelloWorld(){
    return "Hola mundo";
}

//Importancion - exportacion de modulos
//module.exports.sayHello = sayHello;
//module.exports.sayHelloWorld = sayHelloWorld;

module.exports = {
    sayHello: sayHello,
    sayHelloWorld: sayHelloWorld
};

