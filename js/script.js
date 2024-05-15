
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