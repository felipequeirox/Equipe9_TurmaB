document.addEventListener('DOMContentLoaded', function() {
            
    totalSum = parseFloat(localStorage.getItem('total')) || 0;

    document.querySelector('.subtexto').innerHTML = ` O valor de R$ ${totalSum.toFixed(2)} foi adicionado ao seu saldo!`;

});