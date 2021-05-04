document.write("Programa para contar el número de digitos en un numero entero positivo.<br/>");

var num = parseInt(prompt("Proporciona un número entero positivo",1));

document.write("El valor proporcionado fue: " + num);

var contador_digitos=0;

while (num >= 1){
  num = num / 10;
  //contador_digitos=contador_digitos + 1;
  contador_digitos++;
}
document.write("<br/>El número proporcionado contiene: " + contador_digitos + " digitos");