import { productoServices } from '../service/producto-service.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()
  const imgUrl = document.querySelector('[data-imgurl]').value
  const categoria = document.querySelector('[data-categoria]').value
  const nombre = document.querySelector('[data-nombre]').value
  const precio = document.querySelector('[data-precio]').value
  const descripcion = document.querySelector('[data-descripcion]').value

  productoServices.crearProducto(imgUrl, categoria, nombre, precio, descripcion)
    .then(() => {
      window.location.href = '../registro-completado.html'
    })
    .catch(err => console.log(err))
})
