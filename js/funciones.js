function muestraProductos(){

    fetch('/productos.json')
    .then((response) => response.json())
    .then((datos) => {
        datos.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = `
                            <img style="height: 150px;" src=img/${element.descripcion.toUpperCase()}.png>
                            <h3>${element.descripcion}</h3>
                            <p>${element.precio}</p>
                            `
            const input = crearInput(0,2)
            input.addEventListener('change', () => cargaAVariableProvisoria(element.codigo, input.value))
            li.appendChild(input);
            mainDIv.appendChild(li);
        });  
    }    
);
}
function cargaAVariableProvisoria (index,cantidad){
    const comparacion = preCarrito.find(item => item.codigo === index);
    if (comparacion == undefined){
        const varTemporal = productos[index-1]
        varTemporal.cantidad = parseInt(cantidad)
        preCarrito.push(varTemporal)

    }else {
        varTemporal = preCarrito.findIndex((element) => element.codigo === index)
        preCarrito[varTemporal].cantidad = parseInt(cantidad)
    }
}   


/////////////Funcion para guardar carrito a localStorage
const cartSave = (key,value) => {localStorage.setItem(key,value)}

/////////////Funcion para cargar carrito a localStorage

function cartLoad() {
    const cartData = localStorage.getItem('Carrito');
    return cartData ? JSON.parse(cartData) : [];
}

///////////// Muestreo Carrito

function calculoGastos(){
    const divCarrito = document.getElementById('muestra')
    cuerpo.appendChild(divCarrito);

    for (const compras of carrito) {
        const divCompras = document.createElement('p');
        divCompras.innerHTML = ` ${compras.nombre} -- Precio: $${compras.precio} // Cantidad: ${compras.cantidad} Subtotal : $${compras.precio*compras.cantidad}`;    
        divCarrito.appendChild(divCompras);
    }
}


/////////////Funcion para crear botones
function crearBoton(texto,rem){
    const botonProvisorio = document.createElement('button')
    botonProvisorio.textContent = texto;
    botonProvisorio.style.width = rem + "rem";
    return botonProvisorio
}

function crearInput(texto,rem){
    const botonProvisorio = document.createElement('input')
    botonProvisorio.textContent = texto;
    botonProvisorio.style.width = rem + "rem";
    return botonProvisorio
}

function limpiarDiv(parametro){
    const limpiarDivision = document.getElementById (parametro);
    if (limpiarDivision) {limpiarDivision.innerHTML = ''; }
}

function muestreoCarrito(carritoObj){

    for (obj of carritoObj){
        console.log(carritoObj)
        const li = document.createElement('li');
        li.innerText = `${obj.descripcion} - Precio: $${obj.precio} Cantidad: ${obj.cantidad} Subtotal :$${obj.precio*obj.cantidad}`
        mainDIv.appendChild(li);
    };
}