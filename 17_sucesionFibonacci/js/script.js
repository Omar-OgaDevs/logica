/*
*La serie de fibonacci es la suma del numero anterior
*0,1.1,2,3,5,8,13,21, etc
*
*/
function sucesionFibonacci(entrada){
  limpiar();
  /*
  *Manejo de la secuencia de fibonacci
  *
  * Valor a = tiene el valor actual
  * Valor b = tiene el valor nuevo
  * Valor c = tiene el valor siguiente
  * 
  */
 //Asignamos los valores iniciales
 var a = 0;
 var b = 1;
 var c = null;
 var noMaximoElementos = 100;
 var elementosSerie = entrada.value;
 //validamos la entrada
 if(elementosSerie > noMaximoElementos){
   imprimir("Debes probar con menos de 100 elementos");
   return;
 }
 //Imprimir los valores iniciales
 imprimir(a);
 imprimir(b);
 //Realizamos la iteracion
 for (var i = 0; i < elementosSerie -2; i++){
   c = a + b; //Valor siguiente
   a = b; //Respaldando valores
   b = c; //Respaldando valores
   imprimir (c);
 }
}
function imprimir(valor){
  document.getElementById("resultado").innerHTML += valor + " ";
}
function limpiar(){
  document.getElementById("resultado").innerHTML = "";
}
