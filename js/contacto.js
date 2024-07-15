//Titulo
titulo.innerText = "Contacto";

// generacion de DIVs para descripcion de contacto
const datosContacto =  ["Nombre : Matias Omar Garcia", "Direccion : Calle Siempre Viva 123", "1163589911"];

for (const datos of datosContacto){
    const li = document.createElement('li')
    li.innerHTML = `${datos}` ;
    mainDIv.appendChild(li);
}






