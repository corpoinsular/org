const botonMenu = document.getElementById("boton-menu");
const menuPrincipal = document.getElementById("menu-principal");

/* MENÚ PRINCIPAL */
botonMenu.addEventListener("click", () => {
    const abierto = menuPrincipal.classList.toggle("abierto");

    botonMenu.setAttribute("aria-expanded", String(abierto));
});

/* DESPLEGABLE DE INICIATIVAS */
const iniciativas = document.querySelector(".menu-desplegable");
const botonIniciativas = document.querySelector(".iniciativas-toggle");

botonIniciativas.addEventListener("click", () => {
    const abierto = iniciativas.classList.toggle("abierto");

    botonIniciativas.setAttribute("aria-expanded", String(abierto));
});

/* CERRAR AL ELEGIR UNA INICIATIVA */
iniciativas.querySelectorAll(".submenu a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        iniciativas.classList.remove("abierto");
        botonIniciativas.setAttribute("aria-expanded", "false");
    });
});
