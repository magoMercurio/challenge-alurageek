import { productoServices } from '../service/producto-service.js'

const formulario = document.querySelector('[data-form]')

const getUrl = new URL(window.location)
const id = getUrl.searchParams.get('id')

if (id === null) {
  window.location.href = '../Error.html'
}

const inputImageUrl = document.querySelector('[data-imgurl]')
const inputCategoria = document.querySelector('[data-categoria]')
const inputNombre = document.querySelector('[data-nombre]')
const inputPrecio = document.querySelector('[data-precio]')
const inputDescripcion = document.querySelector('[data-descripcion]')

productoServices.listarUnProducto(id).then((datos) => {
  inputImageUrl.setAttribute('src', datos.imageUrl)
  inputCategoria.value = datos.categoria
  inputNombre.value = datos.name
  inputPrecio.value = datos.precio
  inputDescripcion.value = datos.descripcion
})

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()

  productoServices.actualizarProducto(id, inputCategoria, inputNombre, inputPrecio, inputDescripcion)
    .then(() => {
      window.location.href = '../registro-completado.html'
    })
})
