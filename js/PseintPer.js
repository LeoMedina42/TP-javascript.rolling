/*Calcular el perímetro y área de un rectángulo: Crear un algoritmo que permita al usuario ingresar el largo y el ancho de un rectángulo, y calcular su perímetro y área. Las fórmulas son:

Perímetro: P = 2*(largo+ancho)
Área: A=largo×ancho */ 


let largo = parseFloat(prompt("ingresar largo del rectangulo"));
let ancho = parseFloat(prompt("ingrese el ancho del rectangulo"));

let perimetro = 2 * (ancho + largo);
let area = largo * ancho;

document.writeln("perimetro del rectangulo: " + perimetro );
document.writeln("Area del rectangulo:" + area);