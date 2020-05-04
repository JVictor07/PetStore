button = document.querySelector('button.hamburger-menu')
menu = document.querySelector('.header__nav .nav__list')

button.addEventListener('click', () => {
  display_menu = menu.style.display

  if(display_menu == "" || display_menu == "none"){
    menu.style.display = "flex"
  }

  if(display_menu == "flex"){
    menu.style.display = ""
  }
})
console.log(menu)