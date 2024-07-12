/////////////Cambio de titulo
const tituloProductos = document.getElementById('titulo');
tituloProductos.innerText = "Lista de Productos";



///////////// declaracion variable de precios base

let productos = [
    {
        descripcion: 'Queso',
        precio: 200,
        codigo: 1,
        
    },
    {
        descripcion: 'Leche',
        precio: 220,
        codigo: 2,
    },
    {
        descripcion: 'Yogur',
        precio: 300,
        codigo: 3,

    },
    {
        descripcion: 'Yerba',
        precio: 330,
        codigo: 4,

    },
    {
        descripcion: 'Pan',
        precio: 500,
        codigo: 5,

    },
    {
        descripcion: 'Helado',
        precio: 870,
        codigo: 6,

    },
    {
        descripcion: 'Fideos',
        precio: 160,
        codigo: 7,

    },
    {
        descripcion: 'Jamon',
        precio: 450,
        codigo: 8,
    },
]

///////////// Main de Muestra de Productos
const divProductos = document.createElement('main');
cuerpo.appendChild(divProductos);
muestraProductos();

// Boton Compra
const espacioBotonCompra = document.createElement('h2');
const botonCompra = crearBoton("Comprar");
espacioBotonCompra.appendChild(botonCompra);
footer.appendChild(espacioBotonCompra);


//BotonCompra OnClick
botonCompra.onclick= () => {
    if (carrito === null || carrito == []){
        Swal.fire({
            title:"No hay items seleccionados",
            text:"",
            icon:"error"
            });;
    }else {
        cartSave('Carrito', JSON.stringify(carrito));
        Swal.fire({
            title:"Cargado exitosamente al carrito",
            text:"Continue de la pestaña Carrito",
            icon:"success"
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
