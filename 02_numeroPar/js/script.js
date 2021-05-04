document.write("Programa para determinar si un número es par:<br/>");

//Definimos como vamos a recuperar la información del usuario
var num = parseInt(prompt("Proporciana un número:",1));

if (num >=0){
  if (num % 2 == 0){
    alert("¡Tu número SI es un número par!");
  }
    else{
      alert("Lo siento, tu número no es par.");
    }
}
else{
  alert("Proporciona un numero entero mayor a cero.");
}
document.write("<br/>El número proporcionado fue: " + num);
