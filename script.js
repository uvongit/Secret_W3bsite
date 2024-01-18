document.addEventListener('DOMContentLoaded', function() {
    var counter = localStorage.getItem('reloadCounter') || 0;

    counter++;
    localStorage.setItem('reloadCounter', counter);

    if (counter % 4 === 0) {
        document.getElementById('id1').classList.remove('sample');
    }
});
