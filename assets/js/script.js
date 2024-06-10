const precio = 750000;
let cantidad = 0;
let total = 0;

document.querySelector('#precio').innerHTML = precio;
document.querySelector('#cantidad').innerHTML = cantidad;
document.querySelector('#total').innerHTML = total;

function aumentarCantidad() {
    cantidad = cantidad + 1;
    let total = cantidad * precio;
    document.querySelector('#cantidad').innerHTML = cantidad;
    document.querySelector('#total').innerHTML = total;
}

function disminuirCantidad() {
    if (cantidad > 0) {cantidad = cantidad - 1;
    let total = cantidad * precio;
    document.querySelector('#cantidad').innerHTML = cantidad;
    document.querySelector('#total').innerHTML = total;
}
}

const precioSegundo = 2000000;
let totalSegundo = 0;

document.querySelector('#precioSegundo').innerHTML = precioSegundo;

function actualizarCantidad() {
    const cantidadSegundo = document.querySelector('#inputCantidad').value;
    totalSegundo = cantidadSegundo * precioSegundo;
    document.querySelector('#totalSegundo').innerHTML = totalSegundo;
}

function aumentarInput() {
    const inputCantidad = document.getElementById('inputCantidad');
    let valor = parseInt(inputCantidad.value);
    const maximo = parseInt(inputCantidad.max); 
    
    if (valor < maximo) { 
        valor += 1; 
    }
    
    inputCantidad.value = valor; 
    actualizarCantidad(); 
}

function disminuirInput() {
    const inputCantidad = document.getElementById('inputCantidad');
    let valor = parseInt(inputCantidad.value);
    const maximo = parseInt(inputCantidad.max); 
    
    if (valor < maximo) { 
        valor -= 1; 
    }
    
    inputCantidad.value = valor; 
    actualizarCantidad(); 
}