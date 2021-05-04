document.write("Programa para el manejo de tipos de datos:<br/>");

//Cadena (String)
var cadena = "¡Hola desde JavaScript!<br/>";
document.write("<br/>Valor de la cadena: " + cadena + "<br/>");

//Números (num)
var num1 = 15;
var num2 = parseInt("20");
var num3 = num1 + num2 + "<br/>";

document.write("El valor de num1 es: " + num1 + "<br/>");
document.write("El valor de num2 es: " + num2 + "<br/>");
document.write("El valor de num3 es: " + num3 + "<br/>");

//Boolean (true or false)
var bandera = true;
var resultado = (num1 == num2);

document.write("El valor de bandera es: " + bandera + "<br/>");
document.write("¿num1 es igual a num2? " + resultado + "<br/>");
document.write("<br/>");

//Tipo null (valor no asignado)
var tipoNull = null; //aun no se asigna un valor a la variable
document.write("El valor de tipoNull es: " + tipoNull + "<br/>");

//undefined (indefinido)
var tipoindefinido;
document.write("El valor de tipo indefinido es: " + tipoindefinido + "<br/>");
document.write("<br/>");

//Conocer el tipo de dato
resultado = (typeof num1 == "number");
document.write("¿es un número? " + resultado);
document.write("<br/>");
