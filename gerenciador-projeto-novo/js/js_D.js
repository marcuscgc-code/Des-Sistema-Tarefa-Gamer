// Carregar header e footer
document.addEventListener("DOMContentLoaded", function () {
    fetch("/gerenciador-projeto-novo/fragment/Desafio_Tela/header_D.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("header").innerHTML = data));
  
    fetch("/gerenciador-projeto-novo/fragment/Desafio_Tela/footer_D.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("footer").innerHTML = data));
  });
  