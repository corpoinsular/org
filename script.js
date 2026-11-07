
const iniciativas = document.querySelector('.menu-desplegable');
const iniciativasBtn = document.querySelector('.iniciativas-toggle');

iniciativasBtn.addEventListener('click', () => {
  const abierto = iniciativas.classList.toggle('abierto');

  iniciativasBtn.setAttribute(
    'aria-expanded',
    String(abierto)
  );
});

// Cerrar al elegir una iniciativa
iniciativas.querySelectorAll('.submenu a').forEach(enlace => {
  enlace.addEventListener('click', () => {
    iniciativas.classList.remove('abierto');
    iniciativasBtn.setAttribute('aria-expanded', 'false');
  });
});

