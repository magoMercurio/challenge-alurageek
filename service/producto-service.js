
const apiUrl = 'http://localhost:3000/productos'

const listaProductos = () => fetch(apiUrl)
  .then((respuesta) => respuesta.json())
  .catch(err => console.log(err))

const listarUnProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => {
    return respuesta.json()
  })
}

const crearProducto = (imgurl, categoria, nombre, precio, descripcion) => {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    // eslint-disable-next-line no-undef
    body: JSON.stringify({ imgurl, categoria, nombre, precio, descripcion })
  })
}

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: 'DELETE'
  })
}

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json()
  )
}

const actualizarProducto = (imgurl, categoria, nombre, precio, descripcion, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ imgurl, categoria, nombre, precio, descripcion })
  })
    .then(respuesta => respuesta)
    .catch(err => console.log(err))
}

export const productoServices = {
  listaProductos,
  listarUnProducto,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto
}
