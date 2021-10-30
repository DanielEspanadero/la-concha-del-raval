(()=>{
    window.addEventListener("load", ()=>{
    "use strict"

    const tardes = document.querySelectorAll(".tarde");
    const noches = document.querySelectorAll(".noche");
    const date = new Date()
    const hour = date.getHours();
    
    mostrarPrecio();
    
    function mostrarPrecio(){
        if(hour >= 22 || hour <= 8){
            for(let i=0; i < tardes.length; i++){
                tardes[i].style.display = "none";
                };
        }else{
            for(let i=0; i < noches.length;i++){
                noches[i].style.display = "none";
                };
        };
    };

    setTimeout("document.location.reload()", 1800000);

    });
})();