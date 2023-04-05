export function valida (input) {
  const tipoDeInput = input.dataset.tipo
  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = ''
  } else {
    input.parentElement.classList.add('input-container--invalid')
    input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input)
  }
}

const tipoDeErrores = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

const mensajesDeError = {
  nombre: {
    valueMissing: 'Este campo no puede estar vacio'
  },
  email: {
    valueMissing: 'Este campo no puede estar vacio',
    typeMismatch: 'El correo no es valido'
  },
  asunto: {
    valueMissing: 'Este campo no puede estar vacio',
    typeMismatch: 'agrega un titulo al Asunto'
  },
  mensaje: {
    valueMissing: 'Este campo no puede estar vacio',
    typeMismatch: 'Escribe algo que quieras decirme.'
  },
  password: {
    valueMissing: 'Este campo no puede estar vacio',
    patternMismatch: 'Al menos 6 caracteres maximo 12, debe contener una letra minuscula, una letra mayuscula, un numero y no puede contener caracteres especiales'
  },
  categoria: {
    valueMissing: 'Este campo no puede estar vacio',
    typeMismatch: 'Escribe algo que quieras decirme.'
  },
  productonombre: {
    valueMissing: 'Este campo no puede estar vacio',
    typeMismatch: 'Escribe algo que quieras decirme.'
  },
  imgurl: {
    valueMissing: 'Este campo no puede estar vacio',
    typeMismatch: 'Escribe algo que quieras decirme.'
  },
  productoprecio: {
    valueMissing: 'Este campo no puede estar vacio',
    typeMismatch: 'Escribe algo que quieras decirme.'
  },
  descripcion: {
    valueMissing: 'Este campo no puede estar vacio',
    typeMismatch: 'Escribe algo que quieras decirme.'
  }
}

function mostrarMensajeDeError (tipoDeInput, input) {
  let mensaje = ''
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error]
    }
  })

  return mensaje
}
