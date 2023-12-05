document.addEventListener('DOMContentLoaded', function(){

    botao = document.querySelector(".botao")

    botao.addEventListener('click', function(event) {

        // Cria Elementos
        section = document.createElement('section')
        div = document.createElement('div')
        atencao = document.createElement('h2')
        transacao = document.createElement('h3')

        div_botao = document.createElement('div') 
        voltar = document.createElement('a');
        seguir = document.createElement('a');
        
        // Texto - Filhos
        div.appendChild(atencao)
        div.appendChild(transacao)
        section.appendChild(div)

        // Link - Filhos
        div_botao.appendChild(voltar)
        div_botao.appendChild(seguir)
        section.appendChild(div_botao)

        // Delimita as Características do Boxe
        section.style.border = "0.1rem solid #0D284F"
        section.style.backgroundColor = '#A1D6A1';
        section.style.display = 'flex';
        section.style.position = "relative";
        section.style.width = '18rem';
        section.style.height = '20rem';
        section.style.display = 'flex';
        section.style.flexDirection = "column";
        section.style.justifyContent = 'space-evenly';
        section.style.bottom = "1rem";

        // Configurações da Div
        div.style.display = 'flex';
        div.style.flexDirection = "column";
        div.style.alignItems = 'center'; 
        div.style.justifyContent = 'space-between';

        // Atenção
        atencao.innerHTML = "Atenção!"
        atencao.style.fontFamily = 'Open Sans';
        atencao.style.fontSize = '2rem';
        atencao.style.margin = "1rem";

        // Transação
        transacao.innerHTML = "Esta transação é definitiva! Uma fez efetivada, não poderá ser reembolsado!"
        transacao.style.fontFamily = 'EB Garamond';
        transacao.style.fontSize = '1.5rem';
        transacao.style.textAlign = 'center';
        transacao.style.padding = "1rem";

        // Configuarções da Div Botão
        div_botao.style.display = 'flex';
        div_botao.style.flexDirection = "row";
        div_botao.style.alignItems = 'center'; 
        div_botao.style.justifyContent = 'space-evenly';
        div_botao.style.margin = "1rem";

        // Voltar
        voltar.innerHTML = "Voltar";
        voltar.style.textDecoration = 'none';
        voltar.style.fontFamily = 'Open Sans';
        voltar.style.fontSize = '1.5rem';
        voltar.style.border = "0.1rem solid #0D284F"
        voltar.style.padding = "1rem";
        voltar.style.backgroundColor = "#8CBD8C";
        voltar.style.color = "black";

        // Seguir
        seguir.innerHTML = "Seguir";
        seguir.style.textDecoration = 'none';
        seguir.style.fontFamily = 'Open Sans';
        seguir.style.fontSize = '1.5rem';
        seguir.style.border = "0.1rem solid #0D284F"
        seguir.style.padding = "1rem";
        seguir.style.backgroundColor = "#8CBD8C";
        seguir.style.color = "black";

        //Define Links
        voltar.href = "index.html";
        seguir.href = "Pagar4.html"

        // Delimita a Ordem
        main = document.querySelector("main")
        main.appendChild(section)
    })
})
