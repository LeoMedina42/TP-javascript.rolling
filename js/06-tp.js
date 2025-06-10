// pedir al usuario que ingrese dos numeros
let numero1 = parseInt(prompt("Introduce el primer número:"));
let numero2 = parseInt(prompt("Introduce el segundo número:"));

// condicion para ver que numero es mayor, y mostrar el resultado
if (numero1 > numero2) {
    alert("El número mayor es: " + numero1);
} else if (numero2 > numero1) {
    alert("El número mayor es: " + numero2);
} else {
    alert("los dos numeros que ingreso son iguales");
}