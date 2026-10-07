window.escenas = window.escenas || {};



window.escenas.menu = {
    texto: "Bienvenido a las tierras heladas.",
    opciones: [
        { texto: "Entrar en la Penumbra", destino: "habitacionInicio" },
        { texto: "Ver Logros", destino: "logros" }
    ]
};

window.escenas.logros = {
    texto: "Pantalla de Logros.",
    opciones: [
        { texto: "Volver al Menú", destino: "menu" }
    ]
};

window.escenas.habitacionInicio = {
    texto: "Despiertas en una habitación de cueva, el aire congela tus pulmones. Llevas dos días sin comer debido a la nevada.\n\n¿Qué deseas hacer?",
    opciones: [
        { texto: "Buscar comida en la cueva", destino: "buscarComida" },
        { texto: "Salir a cazar en la ventisca", destino: "salirCazar" }
    ]
};

window.escenas.salirCazar = {
    texto: "Decides ir a cazar y buscar qué comer. ¿Qué arma escoges usar?",
    opciones: [
        { texto: "Hacha", destino: "caminohacha" },
        { texto: "Espada", destino: "caminoespada" }
    ]
};