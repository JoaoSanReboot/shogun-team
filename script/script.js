document.addEventListener("DOMContentLoaded", function() {

    var elementoH6 = document.getElementById("texto-um");
    var elementoH5 = document.getElementById("texto-dois");
    var botao = document.getElementById("botao");

    botao.addEventListener("click", function() {
        var divTemporaria = document.createElement("div");

        divTemporaria.appendChild(elementoH6.cloneNode(true));
        divTemporaria.appendChild(elementoH5.cloneNode(true));

        document.body.appendChild(divTemporaria);

        var selecao = document.createRange();
        selecao.selectNodeContents(divTemporaria);

        window.getSelection().removeAllRanges(); 
        window.getSelection().addRange(selecao);

        document.execCommand("copy");

        window.getSelection().removeAllRanges();

        document.body.removeChild(divTemporaria);

    });
});

document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("botao");
    const message = document.createElement("div");
    message.textContent = "Copiado";
    message.classList.add("copy-message");

    copyButton.appendChild(message);

    copyButton.addEventListener("click", function () {
        message.style.display = "block";

        setTimeout(function () {
            message.style.display = "none";
        }, 2500);
    });
});

const elemento = document.getElementById('btn-lcl');

elemento.addEventListener('touchstart', function() {

 const conteudoLocalizacaoUm = document.querySelector('.conteudo-localizacao-um');
 conteudoLocalizacaoUm.style.opacity = '1';

 const conteudoLocalizacaoDois = document.querySelector('.conteudo-localizacao-dois');
 conteudoLocalizacaoDois.style.opacity = '1';

 const biGeoAltFill = document.querySelector('.bi-geo-alt-fill');
 biGeoAltFill.style.fontSize = '2rem';
 biGeoAltFill.style.position = 'relative';

 const copyContainer = document.querySelector('.copy-container');
 copyContainer.style.opacity = '1';
});




