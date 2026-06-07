document.addEventListener("DOMContentLoaded", () => {

```
const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {

    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {

        items.forEach(other => {

            if(other !== item){
                other.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});
```

});
