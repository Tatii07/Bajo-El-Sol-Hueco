window.escenas = window.escenas || {};

Object.assign(window.escenas, {
    buscarComida: {
        texto: "No sales y aunque buscas no encuentras nada...",
        opciones: [
            { texto: "¡Has Muerto De Hambre!", destino: "FinalMuerteInutil" }
        ]
    },
    FinalMuerteInutil: {
        texto: "Tu cuerpo no ha resistido el hambre y ha cedido. \n¡Has Conseguido Un Logro!",
        desbloquearLogro: "MuerteInutil",
        opciones: [
            { texto: "Reiniciar", destino: "menu" }
        ]
    },
    ramahachaA1: {
        texto: "Intentas huir pero te supera en velocidad y te devora lentamente. ¡Has Muerto!",
        opciones: [
            { texto: "Reiniciar", destino: "menu" }
        ]
    },
    ramahachaA2_2: {
        texto: "Intentas atacar y aunque haces daño te decapita. ¡Has Muerto!",
        opciones: [ 
            { texto: "Reiniciar", destino: "menu" }
        ]
    },
    MuerteHelada: {
        texto: "¡Has Muerto Congelado!\n¡Logro obtenido!",
        desbloquearLogro: "MuerteHelada",
        opciones: [
            { texto: "Reiniciar", destino: "menu" }
        ]
    }
});
