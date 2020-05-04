var num = 1
function PassSlide(number) {
  num = num + number

  if(num <= 0) {
    num = 3
  }

  if(num > 3) {
    num = 1
  }

  header = document.querySelector('section.header__ads')
  header.style.backgroundImage = `url('../imgs/header-banners/banner${num}.jpg')`

}