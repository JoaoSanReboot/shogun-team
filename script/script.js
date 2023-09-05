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


function ativarDesativarBotao() {
    var botao = document.getElementById("botao");
    
    // Ativar o botão
    botao.classList.add("active");
    
    // Desativar o botão após 2500 milissegundos (2,5 segundos)
    setTimeout(function() {
        botao.classList.remove("active");
    }, 2500);
}

// Adicionar um ouvinte de eventos para o clique no botão
document.getElementById("botao").addEventListener("click", ativarDesativarBotao);





