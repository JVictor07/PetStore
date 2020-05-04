  const more = document.getElementById("more_featured");
  const less = document.getElementById("less_featured");
  const container = document.querySelector("div.featureds__container");

  ShowMoreItems(more, less, container);
  ShowLessItems(less, more, container);


  /* Eu poderia facilmente fazer a chamada para essas funções
  a partir do botão, porém, sempre que possível busco utilizar o
  addEventListener, pois ele é mais performático */

  function ShowMoreItems(more, less, container) {
    more.addEventListener("click", () => {
      more.style.display = "none";
      less.style.display = "inline";

      container.style.maxHeight = "none";
    });
  }

  function ShowLessItems(less, more, container) {
    less.addEventListener("click", () => {
      less.style.display = "none";
      more.style.display = "inline";

      container.style.maxHeight = `790px`;
    });
  }
