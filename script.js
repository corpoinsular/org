// PROGRAMAS
const detalle = document.getElementById("detallePrograma");
const contenido = document.getElementById("detalleContenido");

const programas = {
    digital: {
        titulo: "Estrategia de Alfabetización e Inclusión Digital",
        texto: "Este programa promueve la formación en habilidades digitales..."
    },
    cine: {
        titulo: "Crea Cine Insular",
        texto: "Programa audiovisual comunitario..."
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

document.querySelector(".cerrar-detalle")?.addEventListener("click", () => {
    detalle.classList.remove("active");
});

<script>
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide(){
    index = (index + 1) % slides.length;
    showSlide(index);
}

setInterval(nextSlide, 4000); // cada 4 segundos
</script>
