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




