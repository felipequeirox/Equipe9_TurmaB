document.addEventListener('DOMContentLoaded', function() {
            
    let totalSum = parseFloat(localStorage.getItem('totalSum')) || 0;

    document.querySelector('.subtexto').textContent = `R$ ${totalSum.toFixed(2)}`;

});