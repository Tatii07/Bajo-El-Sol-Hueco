window.escenas = window.escenas || {};

Object.assign(window.escenas, {
    final_falso: {
        texto: "Soportando el dolor huyes y, a pesar de la pérdida de sangre, logras llegar al refugio. Pero cuando ves tu brazo ya no sangra... ahora está congelado, negro y podrido. De repente oyes un ruido afuera.",
        opciones: [ 
          { texto: "Salir a ver", destino: "final_falsoA"},
          { texto: "Quedarse esperando", destino: "final_falsoB"}
        ] 
    },
    final_falsoA: {
        texto: "Tomas un palo cercano como arma tras perder tu hacha y sales pisando la nieve una vez más. Para cuando reaccionas debido a la falta de sangre, ante ti estaba: un ser monstruoso y deforme; poseía un cuerpo encorvado, dos ojos gravemente hundidos, 3 metros de alto, cada garra del tamaño de un brazo humano y un olor a sangre que inundaba todo el aire con un putrefacto sentimiento. —Ma... Ta... Me...— se le oía susurrar a aquel ser. Lo último que recuerdas es un golpe y perder la conciencia.",
        opciones: [
            { texto: "Fin De La Demo", destino: "finDemo"}
        ]
    },
    final_falsoB: {
        texto: "Decides no salir al estar herida y esperar a que se vaya por su cuenta y no te note... A pesar de ello, parece detectar tu sangre y entra fácilmente haciéndote pedazos en el acto.",
        desbloquearLogro: "DemoCompletada",
        opciones: [
            { texto: "Fin De La Demo", destino: "finDemo" }  
        ]
    },
    final_verdadero: {
        texto: "te detienes un momento y, sacando una daga, cortas una gran parte de tu ropa, y le das forma e haciendo un torniquete rústico a tu brazo como puedes, usando tu único brazo y boca, apretándolo tanto que provocase un dolor infernal. Sin saber dónde estaba ni poder pensar siquiera, caes en un estado semiconsciente en el congelado suelo sin poder moverme. \nDespiertas sin saber cuánto tiempo había pasado con tu brazo aun sangrando pero cubierto",
        opciones: [
            { texto: "caminar hacia el refugio", destino: "final_verdaderoA"},
            { texto: "esperar a recuperar el sentido", destino: "final_verdaderoB"}
        ]
    },
    final_verdaderoA: {
       texto: "Aun herida regresas a la base sangrando aún asi si sigies asi morirás pronto debes tomar una decisión",
       opciones: [
          { texto: "Cauterizar la herida", destino: "final verdaderoA1" },
          { texto: "Usar mas trapos para evitar el sangrado", destino: "final_verdaderoA2"}
       ]
    },
    final_verdaderoA1: 
    tetxo: ""
    finDemo: {
        texto: "¡Gracias por jugar a la Demo de Bajo el Sol Hueco!\n\nEsta historia continúa en desarrollo. Si te ha gustado o tienes comentarios sobre la atmósfera, mecánicas o sugerencias, ¡me encantaría conocer tu opinión!",
        desbloquearLogro: "DemoCompletada",
        opciones: [
            { texto: "Volver al Menú Principal", destino: "menu" }
        ]
    }
});