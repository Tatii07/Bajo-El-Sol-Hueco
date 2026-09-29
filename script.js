// script.js - Solo motor y lógica del juego

const textoPantalla = document.querySelector('#texto-historia');
const contenedorBotones = document.querySelector('.opciones-container');

const logros = {
    MuerteInutil: false,
    cazador: false
};

function cargarEscena(nombreEscena) {
    const escenaActual = escenas[nombreEscena];

    if (escenaActual.desbloquearLogro) {
        logros[escenaActual.desbloquearLogro] = true;
    }

    if (nombreEscena === "logros") {
        escenaActual.texto = "--- TROFEOS DE SANGRE ---\n\n" +
            (logros.MuerteInutil ? "🏆 Muerte Inútil (Desbloqueado)" : "🔒 Muerte Inútil (Bloqueado)") + "\n" +
            (logros.cazador ? "🏆 Cazador (Desbloqueado)" : "🔒 Cazador (Bloqueado)");
    }

    textoPantalla.innerText = escenaActual.texto;
    contenedorBotones.innerHTML = "";

    escenaActual.opciones.forEach(opcion => {
        const nuevoBoton = document.createElement("button");
        nuevoBoton.innerText = opcion.texto;
        nuevoBoton.className = "boton-opcion";

        nuevoBoton.onclick = () => {
            cargarEscena(opcion.destino);
        };

        contenedorBotones.appendChild(nuevoBoton);
    });
}

// Arrancar el juego
cargarEscena("menu");