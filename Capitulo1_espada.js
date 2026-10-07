window.escenas = window.escenas || {};

Object.assign(window.escenas, {
    caminoespada: {
        texto: "¡Tomas tu espada y sales al helado invierno eterno aquel que congela tu cuerpo con solo verlo, a pesar de ello debes salir.. si no lo haces morirás de hambre..",
        opciones: [
            { texto: "Buscar una presa para cazar", destino: "ramaespadaA" },
            { texto: "Buscar en casas alrededor del pueblo cercano", destino: "ramaespadaB"}
        ]
    },
    ramaespadaA: {
        texto: "Encuentra un conejo cerca del pueblo",
        opciones: [
            { texto: "Seguirlo", destino: "ramaespadaA1" },
            { texto: "Buscar algo más", destino: "ramaespadaA2" }
        ]
    }, 
    ramaespadaA1: {
        texto: "Caminas siguiendo el pueblo pero algo te embosca y aseina no logras ver que es",
        opciones: [
            { texto: "Reiniciar", destino: "menu" }
        ]
    },
    ramaespadaA2: {
        texto: "Buscas algo mas pero no encuentas nada",
        opciones: [
            { texto: "Buscar mas", destino: "ramaespadaA2_1" },
            { texto: "Ir al bosque a buscar otra preza", destino: "ramaespadaA2_2" }
        ]
    },
    ramaespadaA2_1: {
        texto: "Buscas mas alrededor y aunque logras atrapar un conejo eres emboscada perdiendo un brazo en el acto antes de poder huir",
        opciones: [
            { texto: "Descansar y buscar cómo evitar el desangrado", destino: "final_verdadero" },
            { texto: "Regresar a la base", destino: "final_falso" }
        ]
    },
    ramaespadaA2_2: {
        texto: "Buscas en el pueblo co éxito encontrado carne seca, cuando estabas ppr volver algo o alguien te golpa por detras ¡Has Muerto!",
        opciones: [
            { texto: "Reiniciar", destino: "menu" }
        ]
    },
    ramaespadaB: {
        texto: "Buscas en el pueblo co éxito encontrado carne seca, cuando estabas ppr volver algo o alguien te golpa por detras ¡Has Muerto!",
        opciones: [
            { texto: "Reiniciar", destino: "menu" }
        ]
    },
});
