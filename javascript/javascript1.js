
let num1 = 20;
let num2 = 10;
let suma = num1 + num2;
let multiplicacion = num1 * num2;;
let division = num1 / num2;
let resta = num1 - num2;
document.write(suma + "<br>");
document.write(multiplicacion + "<br>");
document.write(division + "<br>");
document.write(resta + "<br>");

if(num1 > num2){
    document.write("El numero 1 es mayor que el numero 2");
}else{
    document.write("El numero 2 es mayor que el numero 1");
}

document.write("<br>");
let diaSemana = 3;
switch(diaSemana){
    case 1:
        document.write("Lunes");
        break;
    case 2:
        document.write("Martes");
        break;
    case 3:
        document.write("Miercoles");
        break;
    case 4:
        document.write("Jueves");
        break;
    case 5:
        document.write("Viernes");
        break;
    default:
        document.write("Ya es fin de semana");
}

for(var i = 0; i < 10; i++){
    document.write("<h1>" + i + "</h1>");
}
