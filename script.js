
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
const botonMenu = document.getElementById("boton-menu");
const menuPrincipal = document.getElementById("menu-principal");
/* DESPLEGABLE DE INICIATIVAS */
const iniciativas = document.querySelector(".menu-desplegable");
const botonIniciativas = document.querySelector(".iniciativas-toggle");

botonIniciativas.addEventListener("click", () => {
    const abierto = iniciativas.classList.toggle("abierto");

    botonIniciativas.setAttribute("aria-expanded", String(abierto));
});

iniciativas.querySelectorAll(".submenu a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        iniciativas.classList.remove("abierto");
        botonIniciativas.setAttribute("aria-expanded", "false");
    });
});
