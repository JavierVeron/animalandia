//Todos los elementos del DOM que voy a necesitar para crear las tablas en el Carrito de Compras
const clickButton = document.querySelectorAll('.boton')

const tbody = document.querySelector('.tbody')
let carrito = []

clickButton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(id) {//2
    let producto = productos.find(item => item.id === id);
    console.log(producto);
    addItemCarrito(producto)
}


function addItemCarrito(newItem) {
    carrito.push(newItem);
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    //renderCarrito()
}


function renderCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(carrito);
    const tabla_carrito = document.getElementById("tabla_carrito");
    tabla_carrito.innerHTML = ''
    carrito.map(item => {
        const tr = document.createElement('tr')

        tr.classList.add('ItemCarrito')

        const Content = `
        <th scope="row">${item.id}</th>
        <td class="tabla__productos">
            <img src=${item.img} alt="">
            <h6 class="title">${item.titulo}</h6>
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
        tabla_carrito.append(tr)
    })

    document.getElementById("total_carrito").innerHTML = "$" + precioTotal();
}

function precioTotal() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    console.log(carrito.reduce((total, item) => (total += item.precio, 0)));
    return 100;
}