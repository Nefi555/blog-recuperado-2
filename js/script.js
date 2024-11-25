// Script para el menú responsivo
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menú';
    toggleButton.style.display = 'none';
    toggleButton.style.backgroundColor = '#800000';
    toggleButton.style.color = '#fff';
    toggleButton.style.border = 'none';
    toggleButton.style.padding = '10px';
    toggleButton.style.cursor = 'pointer';

    document.querySelector('header').appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    });

    function checkWidth() {
        if (window.innerWidth <= 768) {
            nav.style.display = 'none';
            toggleButton.style.display = 'block';
        } else {
            nav.style.display = 'block';
            toggleButton.style.display = 'none';
        }
    }

    checkWidth();
    window.addEventListener('resize', checkWidth);
});
