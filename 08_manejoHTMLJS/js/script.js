function mostrarNombre (cajatexto){
  var nomcaja = cajatexto.value;
  var saludo = "¡Hola! " + nomcaja.toUpperCase();

  document.getElementById("resultado").innerHTML = saludo;
}
