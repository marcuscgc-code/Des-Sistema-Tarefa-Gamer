// Carregar header e footer
document.addEventListener("DOMContentLoaded", function () {
    fetch("/gerenciador-projeto-novo/fragment/Notificacao/header_N.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("header").innerHTML = data));
  
    fetch("/gerenciador-projeto-novo/fragment/Notificacao/footer_N.html")
      .then((response) => response.text())
      .then((data) => (document.getElementById("footer").innerHTML = data));
  });
  