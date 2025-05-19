// Efecto de ola en click
document.addEventListener('click', function(e) {
    const ola = document.createElement('span');
    ola.classList.add('ripple');
    ola.style.left = `${e.clientX}px`;
    ola.style.top = `${e.clientY}px`;
    document.body.appendChild(ola);

    setTimeout(() => {
        ola.remove();
    }, 1000); // 1 segundo
});

// Efecto de rastro del mouse
document.addEventListener('mousemove', function(e) {
    const rastro = document.createElement('span');
    rastro.classList.add('trail');
    rastro.style.left = `${e.clientX}px`;
    rastro.style.top = `${e.clientY}px`;
    document.body.appendChild(rastro);

    setTimeout(() => {
        rastro.remove();
    }, 500); // dura medio segundo
});
