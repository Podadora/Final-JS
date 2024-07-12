const displayCarro = localStorage.getItem('Carrito');
const botonConfirmarCompra = crearBoton("Confirmar",6);
const gastos = localStorage.getItem('gastoTotal');
if (gastos === null) {localStorage.setItem("gastoTotal",0);}
displayCarro === null || displayCarro == [] ? mainDIv.innerText = "Carrito Vacio!" : muestreoCarrito(JSON.parse(displayCarro));
displayCarro === null || displayCarro == [] ? botonConfirmarCompra.disabled = true : botonConfirmarCompra.disabled = false;
const displayGastos = document.createElement('p');
displayGastos.innerHTML = `su total es de $${gastos}`;
mainDIv.appendChild(displayGastos);
footer.appendChild(botonConfirmarCompra);
botonConfirmarCompra.onclick= () => {
    localStorage.setItem("gastoTotal",0);

    if( displayCarro === null || displayCarro == []){
        Swal.fire({
            title: "Carrito vacio",
            text: "Selecciones los productos deseados en la pestaña de Productos",
            html: `Seleccione productos de la pestaña 
        <a href="productos.html" autofocus>Productos</a>,`,
            icon: "error"   
            })
    }else{  
    limpiarDiv(mainDIv);
    localStorage.setItem("Carrito",[])
    botonConfirmarCompra.remove();
    Swal.fire({
        title:"Compra Confirmada",
        text:"Gracias por comprar con nosotros! ",
        icon:"success"
        });;
    }
};