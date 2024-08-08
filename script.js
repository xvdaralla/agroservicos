// Espera 3 segundos e depois remove a sobreposição de carregamento
setTimeout(function() {
    var overlay = document.getElementById('overlay');
    overlay.parentNode.removeChild(overlay);
}, 500); // 3000 milissegundos = 3 segundos

document.getElementById('botao').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.left === '-300px') {
        menu.style.left = '0px'; // Mostrar o menu
    } else {
        menu.style.left = '-300px'; // Ocultar o menu
    }
});
