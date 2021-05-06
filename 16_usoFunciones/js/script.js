/*
*El factorial de un número es el producto de 
*todos los números enteros positivos desde
*el 1 hasta el número definido, ejemplo:
*5! = 1x2x3x4x5 = 120, entonces,
*120 es el factorial de 5
*Para esto vamos a usar una
*funcion dentro de otra funcion
*/
function usoFunciones (entrada){
  var dato = entrada.value;
  if (dato >=0 && dato <=100){
    var resultado = factorial(dato);
    limpiar();
    imprimir(resultado);
  }
  else{
    limpiar();
    imprimir("Valor incorrecto, se acepta entre 0 y 100");
  }
}
function factorial(n){
  if(n == 0 || n == 1){
    return 1;
  }
  else{
    //Llamada de funciones recursivas
    return n * factorial (n -1);
  }
}
function imprimir(valor){
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "resultado: " + valor;
}
function limpiar(){
  var resultado = document.getElementById("resultado");
  resultado.innerHTML= "";
}

