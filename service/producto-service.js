
const apiUrl = 'http://localhost:3000/productos'

const listaProductos = () => fetch(apiUrl).then((respuesta) => respuesta.json())

const crearProducto = (categoria, nombre, precio, descripcion) => {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    // eslint-disable-next-line no-undef
    body: JSON.stringify({ categoria, nombre, precio, descripcion, id: uuid.v4() })
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

const actualizarProducto = (categoria, nombre, precio, descripcion, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ categoria, nombre, precio, descripcion })
  })
    .then(respuesta => respuesta)
    .catch(err => console.log(err))
}

export const productoServices = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto
}
