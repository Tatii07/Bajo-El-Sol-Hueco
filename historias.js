const escenas = {
    menu: {
        texto: "Bienvenido a las tierras heladas.",
        opciones: [
            { texto: "Entrar en la Penumbra", destino: "habitacionInicio" },
            { texto: "Ver Logros", destino: "logros" }
        ]
    },
    logros: {
        texto: "",
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
            { texto: "espada", destino: "caminoespada" }
        ]
    },
};
