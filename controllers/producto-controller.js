
import { productoServices } from '../service/producto-service.js'

const nuevoProducto = (imgurl, nombre, precio, id) => {
  const card = document.createElement('div')
  const contenido = `
    <div class="card">
      <div class="card-img-contain">
        <img class="card-img-contain__product" src="${imgurl}">
        <div class= "icons" > 
            <img class="trash-icon" src="./assets/img/icons/delete_black_24dp (1) 1.png" alt="trash" class="img-icon">
            <img class="edit-icon" src="./assets/img/icons/edit_black_24dp 1.png" alt="edit" class="img-icon">
        </div>
      </div>
    <p class="card-productName">${nombre}</p>
    <p class="card-price">$ ${precio}</p>
    <p class="id">${id}</p>
    </div>
  `
  card.innerHTML = contenido
  card.dataset.id = id

  return card
}

const productos = document.querySelector('[data-producto]')

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos()
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProducto(
          elemento.imgurl,
          elemento.nombre,
          elemento.precio,
          elemento.id
        )
      )
    })
  } catch (error) {
    console.log(error)
  }
}

render()
