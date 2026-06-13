const detalle = document.getElementById("detallePrograma");
const contenido = document.getElementById("detalleContenido");

const programas = {
    digital: {
        titulo: "Estrategia de Alfabetización e Inclusión Digital",
        texto: `
            Este programa promueve la formación en habilidades digitales,
            acceso a tecnología y reducción de la brecha digital en comunidades insulares.
            Se enfoca en educación, inclusión y oportunidades laborales.
        `
    },

    cine: {
        titulo: "Crea Cine Insular",
        texto: `
            Programa de creación audiovisual comunitaria que impulsa
            la producción de contenidos locales, identidad cultural
            y formación en narrativa audiovisual.
        `
    }
};

document.querySelectorAll(".btn-detalle").forEach(btn => {

    btn.addEventListener("click", () => {

        const tipo = btn.dataset.target;

        if (programas[tipo]) {

            contenido.innerHTML = `
                <h2>${programas[tipo].titulo}</h2>
                <p>${programas[tipo].texto}</p>
            `;

            detalle.classList.add("active");
        }

    });

});

document.querySelector(".cerrar-detalle").addEventListener("click", () => {
    detalle.classList.remove("active");
});
<script>
const items = document.querySelectorAll('.testimonial');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));
</script>
