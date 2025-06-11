// Pedir una frase al usuario
let frase = prompt("Ingresa una frase:").toLocaleLowerCase();
let vocales = ""; // variable vacia, para guardar las vocales encontradas

// para hacer el recorrido de cada letra
for (let i = 0; i < frase.length; i++) {
  let letra = frase.charAt(i).toLowerCase(); // pasarlo a miniscula(.tolowercase())

  // comprobar si es vocal
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    vocales += letra + " ";
  }
} //Si es "a" O "e" O "i" O "o" O "u", entonces se cumple el if.

// Mostrar las vocales encontradas
alert("Vocales encontradas: " + vocales);
