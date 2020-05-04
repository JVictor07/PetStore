cart = document.getElementById('shopping-cart')
modal = document.querySelector('div.shopping__modal')
shop_modal = document.querySelector("div.shopping__modal")

cart.addEventListener('click', () => {
  modal.style.display = "block"
})

modal.addEventListener('click', (e) => {
  console.log(e.target.className)
  if(e.target.className == "container" || e.target.className == "close_modal"){
    modal.style.display = "none"
  }
})

function MoreItem(num) {
  input = document.getElementById(`input_${num}`)
  new_value = Number(input.value) + 1
  input.value = new_value
}

function LessItem(num) {
  input = document.getElementById(`input_${num}`)
  new_value = Number(input.value) - 1
  if (new_value >= 0){
    input.value = new_value
  }
}
