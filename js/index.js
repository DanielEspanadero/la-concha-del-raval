(() => {
    "use strict"

    window.addEventListener("load", () => {

// Play and pause the song "fumando espero".

        const playCancion = document.querySelector("#play");
        const pauseCancion = document.querySelector("#pause");
        const audio = new Audio("assets/sounds/Sara Montiel - Fumando Espero.mp3");

        playCancion.addEventListener("click", ()=>{
            audio.play(playCancion);
        });
        pauseCancion.addEventListener("click", ()=>{
            audio.pause(pauseCancion);
        });

        
// form animation.

        // const animado = document.querySelector(".animado");
        
        // window.addEventListener("scroll", ()=>{
        //     let scrollTop = document.documentElement.scrollTop;
        //     for(let i = 0; i < animado.length; i++){
        //         let alturaAnimado = animado[i].offsetTop;
        //         if(alturaAnimado - 50 < scrollTop){
        //             animado[i].style.opacity=1;
        //             animado[i].classList.add("mostrar-arriba");
        //         };
        //     };
        // });

        
// Zone of the credits of the web, the year changes automatically.

        const creditsP = document.querySelector(".credits-p");
        const year = new Date().getFullYear();

        creditsP.innerHTML = `Desarrollado por <a href="https://daniel-espanadero.com/" 
        target="_BLANK">Daniel Españadero</a> &copy ${year}`
    });
})();