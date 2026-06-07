document.addEventListener("DOMContentLoaded", () => {

```
const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {

    panel.addEventListener("click", () => {

        const isActive = panel.classList.contains("active");

        panels.forEach(item => {
            item.classList.remove("active");
        });

        if (!isActive) {
            panel.classList.add("active");
        }

    });

});
```

});

