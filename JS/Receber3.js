document.addEventListener('DOMContentLoaded', function() {
            
    totalSum = parseFloat(localStorage.getItem('total')) || 0;

    document.querySelector('.subtexto').innerHTML = `R$ ${totalSum.toFixed(2)}`;

});