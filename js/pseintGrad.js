//Convertir grados Fahrenheit a Celsius: 
// Crear un algoritmo que permita al usuario ingresar una temperatura en grados Fahrenheit y convertirla a grados Celsius. La fórmula para convertir de Fahrenheit a Celsius es: C= (5/9)​*(F−32)

const gradoCentigrado = (parseInt(prompt("Ingrese los grados centigrados")));

let gradoFahrenheit = ""

gradoFahrenheit = (gradoCentigrado * 9/5) + 32;

document.writeln("Los grados en Fahrenheit son "+gradoFahrenheit+ "°F");