
/* script.js */

//Funcion cambiarModoOscuro para cambiar el texto del boton en cada click asi como el estilo de la fuente

function cambiarModoOscuro() {
    console.log("Función cambiarModoOscuro llamada");
    var btn = document.getElementById("modo-oscuro-btn");
    if (btn.textContent === "Modo Oscuro") {
        btn.textContent = "Modo Normal";
        document.body.style.color = "lightblue";
        alert("Se ha cambiado a Modo Normal");
    } else {
        btn.textContent = "Modo Oscuro";
        document.body.style.color = "black";
        alert("Se ha cambiado a Modo Oscuro");
    }
}

//Funcion cambiaImagenes para generar el slider
window.addEventListener('load', function(){

    let imagenes = [];
    imagenes[0] = 'media/img/peter2.jpg';
    imagenes[1] = 'media/img/peterNew.jpg';

    let index = 0;

    function cambiarImagenes(){
        document.getElementById('slider').src = imagenes[index];

        if(index === 0){
            index++;
        } else {
            index--;
        }
    }

    // Cambiar la imagen inicial por la primera imagen del slider
    document.getElementById('slider').src = imagenes[0];

    // Inicia el ciclo después de un breve retraso para dar tiempo a la carga de la imagen inicial
    setTimeout(function() {
        setInterval(cambiarImagenes, 500);
        //Espera de 1 s para iniciar el slider
    }, 1000); 

});