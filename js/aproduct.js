document.querySelector('html').classList.add('js')

const fileInput = document.querySelector('.input-file')
const button = document.querySelector('.input-file-trigger')
const theReturn = document.querySelector('.file-return')

button.addEventListener('keydown', function (event) {
  if (event.keyCode === 13 || event.keyCode === 32) {
    fileInput.focus()
  }
})
// eslint-disable-next-line no-unused-vars
button.addEventListener('click', function (event) {
  fileInput.focus()
  return false
})
// eslint-disable-next-line no-unused-vars
fileInput.addEventListener('change', function (event) {
  theReturn.innerHTML = this.value
})
