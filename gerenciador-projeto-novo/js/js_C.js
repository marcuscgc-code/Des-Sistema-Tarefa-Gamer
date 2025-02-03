// Carrega o header e o footer
document.addEventListener("DOMContentLoaded", function () {
    fetch("/gerenciador-projeto-novo/fragment/header_C.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    fetch("/gerenciador-projeto-novo/fragment/footer_C.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
