function determinaRating (entrada){
  
  var resultado = null;
  var edad = entrada.value;

  if (edad >=0 && edad <12){
    resultado = "AA y A";
  }
  else if (edad >=12 && edad <15){
    resultado = "B, AA y A";
  }
  else if (edad >=15 && edad <18){
    resultado = "B15, B, AA y A";
  }
  else if (edad >=18 && edad <21){
    resultado = "C, B15, B, AA y A";
  }
  else if (edad >=21 && edad <=122){
    resultado = "Puedes ver cualquier tipo de pelicula";
  }
  else if (edad >=123){
    resultado = "No hay registro de una vida tan longeva";
  }
  else {
    resultado = "Valor erroneo, vuelve a intentarlo"
  }
  document.getElementById("resultado").innerHTML = resultado;
}
