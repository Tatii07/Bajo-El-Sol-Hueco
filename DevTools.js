// ==========================================
// HERRAMIENTAS DE DESARROLLADOR (DEV TOOLS)
// ==========================================

const DevTools = {
    // 1. Auditoría de conexiones (Integridad)
    verificarJuego: function() {
        console.log("🔍 === PRUEBA DE INTEGRIDAD DE ESCENAS ===");
        let errores = 0;
        const listaEscenas = Object.keys(window.escenas || {});

        listaEscenas.forEach(nombre => {
            const escena = window.escenas[nombre];
            if (!escena.opciones) return;

            escena.opciones.forEach((op, index) => {
                if (!window.escenas[op.destino]) {
                    console.error(`❌ EN ERROR DE RUTA: En '${nombre}', opción #${index + 1} ("${op.texto}") apunta a '${op.destino}', pero esa escena NO EXISTE.`);
                    errores++;
                }
            });
        });

        if (errores === 0) {
            console.log(`✅ ¡Integridad correcta! Se revisaron ${listaEscenas.length} escenas sin errores.`);
        } else {
            console.warn(`⚠️ Se encontraron ${errores} problema(s) que debes revisar.`);
        }
    },

    // 2. Teletransporte a cualquier escena
    irA: function(nombreEscena) {
        if (window.escenas && window.escenas[nombreEscena]) {
            cargarEscena(nombreEscena);
            console.log(`🚀 Teletransportado a: "${nombreEscena}"`);
        } else {
            console.error(`❌ La escena "${nombreEscena}" no existe.`);
        }
    },

    // 3. Ver estado de logros
    verLogros: function() {
        console.table(logros);
    },

    // 4. Desbloquear todos los logros
    desbloquearLogros: function() {
        for (let logro in logros) {
            logros[logro] = true;
        }
        console.log("🏆 Todos los logros han sido desbloqueados.");
    },

    // 5. Detectar escenas huérfanas (sin botones que apunten a ellas)
    escenasSinUso: function() {
        const todas = Object.keys(window.escenas || {});
        const alcanzables = new Set(["menu"]);

        todas.forEach(nombre => {
            const escena = window.escenas[nombre];
            if (escena.opciones) {
                escena.opciones.forEach(op => alcanzables.add(op.destino));
            }
        });

        const huerfanas = todas.filter(nombre => !alcanzables.has(nombre));

        if (huerfanas.length === 0) {
            console.log("✅ No hay escenas huérfanas.");
        } else {
            console.warn("⚠️️ Las siguientes escenas existen pero NINGÚN botón lleva a ellas:", huerfanas);
        }
    }
};

// Accesos directos para la consola
window.verificarJuego = DevTools.verificarJuego;
window.irA = DevTools.irA;
window.verLogros = DevTools.verLogros;
window.desbloquearLogros = DevTools.desbloquearLogros;
window.escenasSinUso = DevTools.escenasSinUso;

console.log("🛠️ DevTools cargadas. Comandos disponibles: verificarJuego(), irA('escena'), verLogros(), desbloquearLogros(), escenasSinUso()");