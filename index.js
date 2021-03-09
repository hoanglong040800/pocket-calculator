const test = document.querySelector('.test')

const input = document.querySelector('input[type="text"]')
const result = document.querySelector('input[type="text"]:read-only')
const btn = document.querySelectorAll('.btn-num, .btn-op')
const btnEq = document.querySelector('.btn-eq')
var isCaculated = false

// Press Button -> display in input
for (let el of btn) {
  el.addEventListener('click', e => {
    if (isCaculated) {
      input.value = result.value = ''
      isCaculated = false
    }
    input.value += el.value
  })
}

btnEq.addEventListener('click', e => {
  Calculate()
})

input.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    e.preventDefault()
    Calculate()
  }
})

function Calculate() {
  result.value = eval(input.value)
  isCaculated = true
}
