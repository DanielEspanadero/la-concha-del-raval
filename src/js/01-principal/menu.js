(() => {
    window.addEventListener("load", () => {
        "use strict"

        // Responsive menu

        const menu = document.querySelector(".hidden"),
            concha = document.querySelector(".concha");

        concha.addEventListener("click", () => {
            if (window.innerWidth < 768) {
                menu.classList.toggle("hidden");
            } else {
                menu.classList.remove("hidden");
            };
        });


        // Scroll effect when we click on the link

        const links = document.querySelectorAll(".links-menu");

        for (const link of links) {
            link.addEventListener("click", (e)=>{
                
                e.preventDefault();
                const href = link.getAttribute("href");
                const offsetTop = document.querySelector(href).offsetTop;
        
                scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            });
        }

    });
})();
