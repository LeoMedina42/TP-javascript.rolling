/*
//con bucle for
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
*/

//con condicion 👇

const frase = prompt("ingresa una frase de hasta 4 caracteres").toLowerCase();
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(frase.length);
console.log(frase.substring(0, 3));
console.log(frase.charAt(0));
console.log(frase.charAt(5));

if (
  frase.charAt(0) === "a" ||
  frase.charAt(0) === "e" ||
  frase.charAt(0) === "i" ||
  frase.charAt(0) === "o" ||
  frase.charAt(0) === "u"
) {
  document.writeln(frase.charAt(0));
}
if (
  frase.charAt(1) === "a" ||
  frase.charAt(1) === "e" ||
  frase.charAt(1) === "i" ||
  frase.charAt(1) === "o" ||
  frase.charAt(1) === "u"
) {
  document.writeln(frase.charAt(1));
}
if (
  frase.charAt(2) === "a" ||
  frase.charAt(2) === "e" ||
  frase.charAt(2) === "i" ||
  frase.charAt(2) === "o" ||
  frase.charAt(2) === "u"
) {
  document.writeln(frase.charAt(2));
}
if (
  frase.charAt(3) === "a" ||
  frase.charAt(3) === "e" ||
  frase.charAt(3) === "i" ||
  frase.charAt(3) === "o" ||
  frase.charAt(3) === "u"
) {
  document.writeln(frase.charAt(3));
}
