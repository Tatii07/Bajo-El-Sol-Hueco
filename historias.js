const escenas = {
    menu: {
        texto: "Bienvenido a las tierras heladas.",
        opciones: [
            { texto: "Entrar en la Penumbra", destino: "habitacionInicio" },
            { texto: "Ver Logros", destino: "logros" }
        ]
    },
    logros: {
        texto: "Pantalla de Logros.",
        opciones: [
            { texto: "Volver al Menú", destino: "menu" }
        ]
    },
    habitacionInicio: {
        texto: "Despiertas en una habitación de cueva, el aire congela tus pulmones. Llevas dos días sin comer debido a la nevada.\n\n¿Qué deseas hacer?",
        opciones: [
            { texto: "Buscar comida en la cueva", destino: "buscarComida" },
            { texto: "Salir a cazar en la ventisca", destino: "salirCazar" }
        ]
    },
    buscarComida: {
        texto: "No sales y aunque buscas no encuentras nada...",
        opciones: [
            { texto: "¡Has Muerto De Hambre!", destino: "FinalMuerteInutil" }
        ]
    },
    FinalMuerteInutil: {
        texto: "Tu cuerpo no ha resistido el hambre y ha cedido, \n¡Has Conseguído Un Logro!",
        desbloquearLogro: "MuerteInutil",
        opciones: [
            { texto: "Reiniciar", destino: "menu" }
        ]
    },
    salirCazar: {
        texto: "Decides ir a cazar y buscar que comer ¿Que arma escoges usar?",
        opciones: [
            { texto: "Hacha", destino: "caminohacha" },
            { texto: "Espada", destino: "caminoespada" }
        ]
    },
    caminohacha: {
        texto: "¡Has escogido el hacha! Te levantas de tu cama y tomas tu desgastada hacha, fuera era oscuro y un silencio mortal que impedía escuchar incluso tu propia respiración. El suelo era blando y frágil, estando cubierto de nieve que llegaba hasta los talones. Saliendo de la cueva que anteriormente habías decidido tomar como refugio, partes hacia el bosque; los árboles eran de un color oscuro, tan oscuro como la misma noche. De repente ves un conejo ¿qué haces?",
        opciones: [
            { texto: "Intentar Cazarlo", destino: "ramahachaA" },
            { texto: "Buscar algo más", destino: "ramahachaB" }
        ]
    },
    caminoespada: {
        texto: "Tomaste la espada y saliste a la ventisca...",
        opciones: [
            { texto: "Volver al Menú", destino: "menu" }
        ]
    },
    ramahachaA: {
        texto: "Te acercas sigilosamente al conejo pero logra huir, de repente detras de ti se oye un crujido que haces?",
        opciones: [
            { texto: "Correr sin mirar atras", destino: "ramahachaA1" },
            { texto: "Voltear", destino: "ramahachaA2" }
        ]
    },
    ramahachaA1: {
        texto: "Intentas huir pero te supera en velocidad y te devora lentamente ¡Has Muerto!",
        opciones: [
         {   texto: "reiniciar", destino: "menu" }
        ]
    },
    ramahachaA2: {
        texto: "logras defenderte con tu hacha a medias evitando una herida mortal mas tu brazo quedo cercenado, logras herirlo levementemente",
        opciones:  [
            { texto: "huir ahora que está herido", destino: "ramahachaA2_1"},
            { texto: "atacarlo", destino: "ramahachaA2_2" }
            ]
    },
        ramahachaA2_2: {
             texto: "intentas  atacar y aunque haces daño te decapita ¡Has Muerto!",
            opciones: [ 
                { texto: "reiniciar", destino: "menu"}
            ]
    },
    ramahachaB: {
        texto: "Decides ignorar al conejo y seguir buscando...",
        opciones: [
            { texto: "Volver al Menú", destino: "menu" }
        ]
    }
};