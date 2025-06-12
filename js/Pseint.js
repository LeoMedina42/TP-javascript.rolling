//Calcular el precio con descuento: Crear un algoritmo que permita ingresar el precio de un producto y aplicar un descuento del 15% si el precio es mayor a 1000. Mostrar el precio final.

//pedir un precio de producto
let precio = parseFloat(prompt("Ingrese el precio del producto:"));

// condicion si precio es mayor a 0, le aplico un descuento, creando una variable descuento que contiene el porcentaje a hacer el descuento(multiplicacion 0.15).
//  y una variable de precio final,  para que si el precio del producto es mayor a 1000 haga el descuento del 15% y mostrando el precio final con un alert.
//si no es mayor a 1000 mostraria el el mensaje que no se aplica el descuento, y aparece el valor del precio.
//si ingresaria un valor menor a 0 o igual a 0, mostraria otro mensaje que ingrese un precio mayor a 0 que sea valido.
if (precio > 0) {
    if (precio > 1000) {
        let descuento = precio * 0.15;
        let precioFinal = precio - descuento;
        alert("Se aplicó un 15% de descuento. Precio final: $" + precioFinal);
    } else {
        alert("No se aplica descuento. Precio final: $" + precio);
    }
} else {
    alert("Por favor, ingrese un precio válido mayor a 0.");
}