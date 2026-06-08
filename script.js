document.addEventListener("DOMContentLoaded", () => {

    const panelsContainer = document.querySelector(".panels");

    panelsContainer.addEventListener("click", (e) => {

        const panel = e.target.closest(".panel");

        if (!panel) return;

        document.querySelectorAll(".panel").forEach(item => {
            item.classList.remove("active");
        });

        panel.classList.add("active");

    });

});
