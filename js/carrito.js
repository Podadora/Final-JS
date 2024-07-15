const displayCarro = localStorage.getItem('Carrito');
const botonConfirmarCompra = crearBoton("Confirmar",6);
const botonCancelarCompra = crearBoton("Cancelar",6);
const gastos = localStorage.getItem('Gastos Totales');
displayCarro === null || displayCarro == [] ? mainDIv.innerText = "Carrito Vacio!" : muestreoCarrito(JSON.parse(displayCarro));
displayCarro === null || displayCarro == [] ? botonConfirmarCompra.disabled = true : botonConfirmarCompra.disabled = false;
displayCarro === null || displayCarro == [] ? botonCancelarCompra.disabled = true : botonConfirmarCompra.disabled = false;

const displayGastos = document.createElement('p');
displayGastos.innerHTML = `Su total es de $${gastos}`;
mainDIv.appendChild(displayGastos);
footer.appendChild(botonConfirmarCompra);
footer.appendChild(botonCancelarCompra);

botonCancelarCompra.onclick = () =>{
    localStorage.setItem("Gastos Totales",0);
    localStorage.setItem("Carrito",[])
    Swal.fire({
        title:"Compra cancelada",
        html: `Puede volver a operar desde 
        <a href="productos.html" autofocus>Productos</a>,`,
        icon:"success"
        });;
}

botonConfirmarCompra.onclick = () => {
    localStorage.setItem("Gastos Totales",0);
    limpiarDiv(mainDIv);
    localStorage.setItem("Carrito",[])
    botonConfirmarCompra.disabled = true;
    botonCancelarCompra.disabled = true;

    Swal.fire({
        title:"Compra Confirmada",
        text:"Gracias por comprar con nosotros! ",
        icon:"success"
        });;
}
