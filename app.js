//CAROUSEL
$('.carousel').carousel({
    interval: 2000
})

//P R O D U C T O S

// Array Productos ---- PRODUCTOS.HTML------
const productos = [{
    titulo: "Nupec croquetas para Perros, Adulto Razas pequeñas, con Omega 3 y 6, presentación de 8 kg.",
    img: "./assets/img/NUPEC1.jpg",
    alt: "croqueta Nupec Aulto pequeño",
    precio: "$760",
    descripcion: "Nutrición Canina Científica Contiene omega 3, 6 y vitaminas.Aporta balance de aminoácidos.Para perros adultos, razas pequeñas.5 KG."
},
{
    titulo: "Nupec croquetas para Perros, Adulto Razas pequeñas, con Omega 3 y 6, presentación de 8 kg.",
    img: "./assets/img/nupec2.jpg",
    alt: "croqueta Nupec Aulto pequeño",
    precio: "$760",
    descripcion: "Nutrición Canina Científica Contiene omega 3, 6 y vitaminas.Aporta balance de aminoácidos.Para perros adultos, razas pequeñas.5 KG."

},
{
    titulo: "Nupec croquetas para Perros, Adulto Razas pequeñas, con Omega 3 y 6, presentación de 8 kg.",
    img: "./assets/img/NUPEC1.jpg",
    alt: "croqueta Nupec Aulto pequeño",
    precio: "$760",
    descripcion: "Nutrición Canina Científica Contiene omega 3, 6 y vitaminas.Aporta balance de aminoácidos.Para perros adultos, razas pequeñas.5 KG."

},
{
    titulo: "Nupec croquetas para Perros, Adulto Razas pequeñas, con Omega 3 y 6, presentación de 8 kg.",
    img: "./assets/img/NUPEC1.jpg",
    alt: "croqueta Nupec Aulto pequeño",
    precio: "$760",
    descripcion: "Nutrición Canina Científica Contiene omega 3, 6 y vitaminas.Aporta balance de aminoácidos.Para perros adultos, razas pequeñas.5 KG."

},
{
    titulo: "Nupec croquetas para Perros, Adulto Razas pequeñas, con Omega 3 y 6, presentación de 8 kg.",
    img: "./assets/img/NUPEC1.jpg",
    alt: "croqueta Nupec Aulto pequeño",
    precio: "$760",
    descripcion: "Nutrición Canina Científica Contiene omega 3, 6 y vitaminas.Aporta balance de aminoácidos.Para perros adultos, razas pequeñas.5 KG."

},
{
    titulo: "Nupec croquetas para Perros, Adulto Razas pequeñas, con Omega 3 y 6, presentación de 8 kg.",
    img: "./assets/img/NUPEC1.jpg",
    alt: "croqueta Nupec Aulto pequeño",
    precio: "$760",
    descripcion: "Nutrición Canina Científica Contiene omega 3, 6 y vitaminas.Aporta balance de aminoácidos.Para perros adultos, razas pequeñas.5 KG."

},]

//Todos los elementos del DOM que voy a necesitar para crear las tarjetas de productos
const contTarjetas = document.getElementById('tarjetas');


//Creo HTML dinámico para mostrar la información de los productos para mascotas a partir del array fake DB
function mostrarInfoMascota(array) {
    contTarjetas.innerHTML = ''
    array.forEach(element => {
        let html = `<div class="tarjeta" id="tarjeta">
            <h3 class="tarjeta__titulo"> ${element.titulo} </h3>
            <img src="${element.img}" alt="${element.alt}" class="tarjeta__img">
            <div class="tarjeta__info">
                <p class="tarjeta__info--precio"> ${element.precio} </p>
                <button class="tarjeta__info--boton boton">Agregar al carrito</button>
                <span class="tarjeta__info--descripcion"> ${element.descripcion} </span>
            </div>
        </div>`;
        contTarjetas.innerHTML += html;
    });
}
mostrarInfoMascota(productos);


//--------CARRITO.HTML----------
//Todos los elementos del DOM que voy a necesitar para crear las tablas en el Carrito de Compras
const clickButton = document.querySelectorAll('.boton')

const tbody = document.querySelector('.tbody')
let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e) {
    const button = e.target
    const item = button.closest('.tarjeta')
    const itemTitle = item.querySelector('.tarjeta__titulo').textContent;
    const itemPrice = item.querySelector('.tarjeta__info--precio').textContent;
    const itemImg = item.querySelector('.tarjeta__img').src;

    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }

    addItemCarrito(newItem)
}


function addItemCarrito(newItem) {


    carrito.push(newItem)



    renderCarrito()
}


function renderCarrito() {
    console.log(carrito)
    tbody.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')

        tr.classList.add('ItemCarrito')

        const Content = `
        <th scope="row">1</th>
        <td class="tabla__productos">
            <img src=${item.img} alt="">
            <h6 class="title">${item.title}</h6>
        </td>
        <td class="tabla__price">
            <p>${item.precio}</p>
        </td>
        <td class="tabla__cantidad">
            <input class="input__elemento" type="number" min="1" value=${item.cantidad}>
            <button class="delete btn btn-danger">x</button>
        </td>
    `
        tr.innerHTML = Content;
        tbody.append(tr)


    })

}


