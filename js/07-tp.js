// Pedir numeros al usuario
let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));
let numero3 = parseInt(prompt("Ingresa el tercer número:"));

// se crea la variable mayor para guardar el numero mas grande
let mayor;

// Comparar los números, con operador logico AND.
if (numero1 >= numero2 && numero1 >= numero3) {
  mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  mayor = numero2;
} else {
  mayor = numero3;
}

// Mostrar el resultado
alert("El número mayor es: " + mayor);
