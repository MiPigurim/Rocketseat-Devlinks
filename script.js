function toggleMode() {
  const html = document.documentElement;

  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light");
  //  } else {
  //    html.classList.add("light");
  //  }

  html.classList.toggle("light"); //o toggle é uma função quejá aplica semelhante à lógica montada a cima

  //pegar a tag img
  const img = document.querySelector("#profile img");
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "Foto de Maky Brito sorrindo, usando óculos escuros e jaqueta preta em fundo azul"
    );
  } else {
    //sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Maky Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    );
  }
}
