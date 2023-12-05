document.addEventListener('DOMContentLoaded', function() {
            
    let totalSum = parseFloat(localStorage.getItem('totalSum')) || 0;

    document.querySelector('.subtexto').textContent = ` O valor de R$ ${totalSum.toFixed(2)} foi adicionado ao seu saldo!`;

});