document.addEventListener('DOMContentLoaded', function () {

    // CALCULADORA DE PREÇOS

    // Define Variáveis

    let span = document.querySelector('.valor span');
    let p = document.querySelector('.produto p');
    let history = [];
    let confirmar;

    // Função Total Atual

    function pegaTotal() {
        return parseFloat(span.innerHTML);
    }

    // Função Atualiza Atual

    function atualizaTotal(valor) {

        span.innerHTML = valor.toFixed(2);
        soma = span.innerHTML;

        // Cria o Botão Confirmar 

        if (valor != 0) {

            // Cria Botão 
            confirmar = document.createElement('a');

            // Define Características
            confirmar.innerHTML = "Confirmar";
            confirmar.style.textDecoration = 'none';
            confirmar.style.fontFamily = 'Open Sans';
            confirmar.style.fontSize = '1.5rem';
            confirmar.style.border = "0.1rem solid #0D284F";
            confirmar.style.padding = "1rem";
            confirmar.style.backgroundColor = "#8CBD8C";
            confirmar.style.color = "black";
            confirmar.href = "Receber2.html";
            confirmar.style.width = "15rem";

            //Define Posicionamento
            confirmar.style.display = 'flex';
            confirmar.style.position = "relative";
            confirmar.style.flexDirection = "row";
            confirmar.style.alignItems = 'center';
            confirmar.style.justifyContent = 'space-evenly';
            confirmar.style.top = "2rem";
            //confirmar.style.left = "3.5rem";

            // Adiciona o Botão
            secaoTeclas = document.querySelector('.teclas');
            secaoTeclas.appendChild(confirmar);
        }
    }


    // Função de Soma

    function add() {
        total = pegaTotal();
        history.push(total);
        valor = parseFloat(p.innerHTML);
        atualizaTotal(total + valor);
    
        localStorage.setItem('total', total + valor);

    }

    // Função de 'Undo'

    function undo(total) {
        if(history.length > 0) {
            
            total = history.pop()

            atualizaTotal(total)
        }
    }

    // Restante do Código

    nums = document.querySelectorAll('.num')

    for (num of nums) {
        num.addEventListener('click', function() {
            if (p.innerHTML == '0') {
                p.innerHTML = this.innerHTML
            }
            else {
                p.innerHTML += this.innerHTML
            }
        })
    }

    coms = document.querySelectorAll('.com')

    for (com of coms) {
        com.addEventListener('click', function() {
            if (this.innerHTML == '⟲') {
                undo()
            } else if (this.innerHTML == 'Adicionar Produto') {
                add()
                p.innerHTML = '0'
            }
        })
    }

})