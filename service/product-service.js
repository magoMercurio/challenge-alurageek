
const apiUrl = 'http://localhost:3000/perfil'
const apiUrlId = `http://localhost:3000/perfil/${id}`

const listaProductos = () => fetch(apiUrl).then((respuesta) => respuesta.json())

const crearProducto = (categoria, nombre, precio, descripcion) => {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ categoria, nombre, precio, descripcion, id: uuid.v4() })
  })
}

const eliminarProducto = (id) => {
  return fetch(apiUrlId, {
    method: 'DELETE'
  })
}

const detalleProducto = (id) => {
  return fetch(apiUrlId).then((respuesta) => respuesta.json()
  )
}

const actualizarProducto = (categoria, nombre, precio, descripcion, id) => {
  return fetch(apiUrlId, {
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