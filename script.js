const textoPantalla = document.querySelector('#texto-historia');
const contenedorBotones = document.querySelector('.opciones-container');

// 1. Guardar la escena actual
function guardarPartida(nombreEscena) {
    localStorage.setItem("partida_guardada", nombreEscena);
    console.log("Progreso guardado en escena:", nombreEscena);
}

// 2. Cargar la escena guardada
function cargarPartida() {
    let escenaGuardada = localStorage.getItem("partida_guardada");
    
    if (escenaGuardada && window.escenas[escenaGuardada]) {
        mostrarEscena(escenaGuardada); // Usa tu función existente para renderizar la escena
    } else {
        alert("No hay ninguna partida guardada.");
    }
}

// 3. Borrar el progreso (para reiniciar desde cero)
function borrarPartida() {
    localStorage.removeItem("partida_guardada");
}


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
            (logros.Demo ? "🏆 Demo Completada (Desbloqueado)" : "🔒 Demo Completada (Bloqueado)") + "\n" +
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