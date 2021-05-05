function manejoArreglos(){
  var idioma = null;

  //Definir el arreglo
  var idiomas = new Array();
  idiomas[0] = "Aleman,";
  idiomas[1] = "Chino Mandarin,";
  idiomas[2] = "Ingles,";
  idiomas[3] = "Frances,";
  idiomas[4] = "Portugues,";
  idiomas[5] = "Ruso,";
  idiomas[6] = "Español,";

  //Recorremos el arreglo
  for(var i = 0; i < idiomas.length; i++){
    //Accedemos a cada elemento
    idioma = idiomas[i];
    //Imprimir cada elemento del arreglo
    mostrar(idioma);

  }
}
function mostrar(arreglo){
  document.getElementById("resultado").innerHTML += arreglo + " ";
}
function limpiar(){
  document.getElementById("resultado").innerHTML = "";
}
