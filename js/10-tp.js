let numero = parseInt(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
  alert("El " + numero + " es divisible por 2.");
} else if (numero % 3 === 0) {
  alert("El " + numero + " es divisible por 3.");
} else if (numero % 5 === 0) {
  alert("El " + numero + " es divisible por 5.");
} else if (numero % 7 === 0) {
  alert("El " + numero + " es divisible por 7.");
} else {
  alert("El " + numero + " no es divisible por 2, 3, 5 ni 7.");
}
