/////////////Cambio de titulo
titulo.innerText = "Lista de Productos";



///////////// Obtener array con objetos desde archivo JSON con peticion del tipo GET

fetch('/productos.json')
    .then((response) => response.json())
    .then((datos) => {
        datos.forEach(element => {
            productos.push(element)
        });;    
    }    
);


muestraProductos();

// Boton Compra
const espacioBotonCompra = document.createElement('h2');
const botonCompra = crearBoton("Comprar");
espacioBotonCompra.appendChild(botonCompra);
footer.appendChild(espacioBotonCompra);


//BotonCompra OnClick
botonCompra.onclick= () => {
    carrito = cartLoad();
    if (carrito.length === 0  ){  
        cartSave('Carrito', JSON.stringify(preCarrito));
        let gastos = preCarrito.reduce((total,item) => {
            return total + (item.precio * item.cantidad)
        },0)
        console.log(gastos)
        localStorage.setItem("Gastos Totales", JSON.stringify(gastos))
        Swal.fire({
            title:"Cargado exitosamente al carrito",
            text:"Continue de la pestaña Carrito",
            icon:"success"
            })  
        
    }else {
        Swal.fire({
            title:"Ups",
            text:"Ya hay un carrito cargado, confirme o cancele el mismo desde la pestaña Carrito para continuar",
            icon:"error"
            });;
    }
};

/////////////Constructor productos para carrito

class Producto {
    constructor(cantidad, nombre, precio, code) {
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.precio = precio;
        this.code = code;
    }
}
