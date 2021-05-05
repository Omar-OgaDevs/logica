function manejoMatrices () {
  var dato = null;
  /*
  * Definicion de la matrix
  * [a b c] renglon 0
  * [d e f] renglon 1
  * [g h i] renglon 2
  */
 //Arreglos individuales
 var a1 = new Array();
 //Renglon 0
 a1[0]='a';
 a1[1]='b';
 a1[2]='c';
 //Renglon 1
 var a2 = new Array();
 a2[0]= 'd';
 a2[1]= 'e';
 a2[2]= 'f';
 //Renglon 2
 var a3 = new Array();
 a3[0]='g';
 a3[1]='h';
 a3[2]='i';
 
 //Creamos el arreglo de arreglos
 var a = new Array();
 a[0]=a1;
 a[1]=a2;
 a[2]=a3;

 //Recorrer la matriz
 for(var i=0; i<a.length; i++){
   //Recorrer cada arreglo interno
   for(var j=0; j<a[i].length; j++){
     //Imprimir cada elemento del arreglo
     dato = a[i][j];
     mostrar(dato);
   }
   mostrar("<br/>");
 }  
}
function mostrar(valor){
  document.getElementById("resultado").innerHTML += valor + " ";  
}
function limpiar(){
  document.getElementById("resultado").innerHTML = "";
}

