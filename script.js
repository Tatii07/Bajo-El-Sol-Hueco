const textoPantalla = document.querySelector('#texto-historia');
const contenedorBotones = document.querySelector('.opciones-container');

const logros = {
    MuerteInutil: false,
    cazador: false,
    Indeciso: false,
    MuerteHelada: false
};

function cargarEscena(nombreEscena) {
    const escenaActual = window.escenas[nombreEscena];

    if (!escenaActual) {
        console.error("No se encontró la escena:", nombreEscena);
        return;
    }

    if (escenaActual.desbloquearLogro) {
        logros[escenaActual.desbloquearLogro] = true;
    }

    if (nombreEscena === "logros") {
                escenaActual.texto = "--- TROFEOS DE SANGRE ---\n\n" +
            (logros.MuerteInutil ? "🏆 Muerte Inútil (Desbloqueado)" : "🔒 Muerte Inútil (Bloqueado)") + "\n" +
            (logros.cazador ? "🏆 Cazador (Desbloqueado)" : "🔒 Cazador (Bloqueado)") + "\n" +
            (logros.Indeciso ? "🏆 Indeciso (Desbloqueado)" : "🔒 Indeciso (Bloqueado)") + "\n" +
            (logros.MuerteHelada ? "🏆 MuerteHelada (Desbloqueado)" : "🔒 MuerteHelada(Bloqueado)");
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
cargarEscena("menu");