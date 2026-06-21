<script>
// =========================
// TARJETAS (ACORDEÓN)
// =========================
document.querySelectorAll(".programa-card .btn-detalle").forEach(btn => {
    btn.addEventListener("click", () => {

        const card = btn.closest(".programa-card");

        // Cierra otras tarjetas (modo profesional)
        document.querySelectorAll(".programa-card").forEach(c => {
            if (c !== card) c.classList.remove("active");
        });

        // Toggle de la tarjeta actual
        card.classList.toggle("active");

    });
});


// =========================
// LUCIDE ICONS
// =========================
if (window.lucide) {
    lucide.createIcons();
}


// =========================
// MODAL (OPCIONAL PERO FUNCIONAL)
// =========================
const detalle = document.getElementById("detallePrograma");
const contenido = document.getElementById("detalleContenido");

const programas = {
    digital: {
        titulo: "Estrategia de Alfabetización e Inclusión Digital",
        texto: "Promueve formación para reducir brechas digitales y ampliar oportunidades educativas, laborales y sociales."
    },
    cine: {
        titulo: "Crea Cine Insular",
        texto: "Programa de creación audiovisual comunitaria que fortalece identidad cultural y narración territorial."
    }
};

// Abrir modal SOLO si existe data-target
document.querySelectorAll(".btn-detalle").forEach(btn => {
    btn.addEventListener("click", () => {
