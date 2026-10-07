window.escenas = window.escenas || {};

Object.assign(window.escenas, {
    caminohacha: {
        texto: "¡Has escogido el hacha! Te levantas de tu cama y tomas tu desgastada hacha...",
        opciones: [
            { texto: "Intentar Cazarlo", destino: "ramahachaA" },
            { texto: "Buscar algo más", destino: "ramahachaB" }
        ]
    },
    ramahachaA: {
        texto: "Te adentras en el bosque y encuentras un conejo, logras acércate pero oyes un crujido tras de ti",
        opciones: [
            { texto: "Correr sin mirar atrás", destino: "ramahachaA1" },
            { texto: "Voltear", destino: "ramahachaA2" }
        ]
    }, 
    ramahachaA1: {
        texto: "Intentas huir pero te supera en velocidad y te devora lentamente. ¡Has Muerto!",
        opciones: [
            { texto: "Reiniciar", destino: "menu" }
        ]
    },
    ramahachaA2: {
        texto: "Logras defenderte con tu hacha a medias evitando una herida mortal mas tu brazo quedó cercenado, logras herirlo levemente.",
        opciones: [
            { texto: "Huir ahora que está herido", destino: "ramahachaA2_1" },
            { texto: "Atacarlo", destino: "ramahachaA2_2" }
        ]
    },
    ramahachaA2_1: {
        texto: "Aprovechas que lo heriste levemente para huir; a pesar de ello, la sangre no deja de salir a grandes cantidades.",
        opciones: [
            { texto: "Descansar y buscar cómo evitar el desangrado", destino: "final_verdadero" },
            { texto: "Regresar a tu base", destino: "final_falso" }
        ]
    },
    ramahachaA2_2: {
        texto: "Intentas atacar y aunque haces daño te decapita. ¡Has Muerto!",
        opciones: [
            { texto: "Reiniciar", destino: "menu" }
        ]
    },
    ramahachaB: {
        texto: "Decides ignorar al conejo y seguir buscando... ¡Has Conseguido un logro!",
        desbloquearLogro: "Indeciso",
        opciones: [
            { texto: "Volver al Menú", destino: "menu" }
        ]
    },
});
