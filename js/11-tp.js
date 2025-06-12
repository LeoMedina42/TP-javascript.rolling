let numero = parseInt(prompt("Introduce un número:"));

//creo una variable para ver si es divisible para cada numero.
let esDiv2 = numero % 2 === 0;
let esDiv3 = numero % 3 === 0;
let esDiv5 = numero % 5 === 0;
let esDiv7 = numero % 7 === 0;

//variable para crear el mensaje mas el numero que escriba el usuario

let mensaje = "El " + numero;

// se crea primera condicion, usando negacion logica !, para saber si no es divisible, por 2,3,5,7.

if (!esDiv2 && !esDiv3 && !esDiv5 && !esDiv7) {
  mensaje += " no es divisible por 2, 3, 5 ni 7.";
} else {
  mensaje += " es divisible por ";

  // segunda condicion si es divisible por 2, y no por 3, 5, 7, entonces ejecuta el mensaje.

  if (esDiv2 && !esDiv3 && !esDiv5 && !esDiv7) {
    mensaje += "2.";
  } else if (!esDiv2 && esDiv3 && !esDiv5 && !esDiv7) {
    mensaje += "3.";
  } else if (!esDiv2 && !esDiv3 && esDiv5 && !esDiv7) {
    mensaje += "5.";
  } else if (!esDiv2 && !esDiv3 && !esDiv5 && esDiv7) {
    mensaje += "7.";
  } else if (esDiv2 && esDiv3 && !esDiv5 && !esDiv7) {
    mensaje += "2 y por 3.";
  } else if (esDiv2 && !esDiv3 && esDiv5 && !esDiv7) {
    mensaje += "2 y por 5.";
  } else if (esDiv2 && !esDiv3 && !esDiv5 && esDiv7) {
    mensaje += "2 y por 7.";
  } else if (!esDiv2 && esDiv3 && esDiv5 && !esDiv7) {
    mensaje += "3 y por 5.";
  } else if (!esDiv2 && esDiv3 && !esDiv5 && esDiv7) {
    mensaje += "3 y por 7.";
  } else if (!esDiv2 && !esDiv3 && esDiv5 && esDiv7) {
    mensaje += "5 y por 7.";
  } else if (esDiv2 && esDiv3 && esDiv5 && !esDiv7) {
    mensaje += "2, por 3 y por 5.";
  } else if (esDiv2 && esDiv3 && !esDiv5 && esDiv7) {
    mensaje += "2, por 3 y por 7.";
  } else if (esDiv2 && !esDiv3 && esDiv5 && esDiv7) {
    mensaje += "2, por 5 y por 7.";
  } else if (!esDiv2 && esDiv3 && esDiv5 && esDiv7) {
    mensaje += "3, por 5 y por 7.";
  } else if (esDiv2 && esDiv3 && esDiv5 && esDiv7) {
    mensaje += "2, por 3, por 5 y por 7.";
  }
}

alert(mensaje);
