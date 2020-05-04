  const items = document.getElementById('news__container').children.length
  const buttons = document.getElementById('actions__circles')

  MakeButtons(items, buttons)

  function MakeButtons(items, buttons) {
    /* 
    Pensando que 4 itens compõem uma seção de Novidades...

    Iniciando a partir de um item, a cada
    novos 4 itens, está função fará um novo
    botão para pular de "seção".
    */

    let j = 1
    let long_pass_value = 0

    for (i=0; i < items; i++) {

      if (j == 1){

        button = document.createElement("button")
        button.classList.add("circles__item")

        button.setAttribute('onclick', `JumpSection(${long_pass_value})`)
        buttons.appendChild(button)

        long_pass_value = long_pass_value + 1170

        j++
      } else if (j == 4){
        j = 1
      } else {
        j++
      }
      
    }

  }

  function JumpSection(num) {
    /* rola o scrool para mostrar uma nova seção */
    const news = document.getElementById('news__container')
    news.scrollTo(num, 0);
  }

  function JumpItem(num) {
    /* rola o scrool para mostrar um novo itwm */
    const news = document.getElementById('news__container')
    news.scrollBy(num, 0);
  }