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
          { texto: "Cauterizar la herida", destino: "final_verdaderoA1" },
          { texto: "Usar mas trapos para evitar el sangrado", destino: "final_verdaderoA2"}
       ]
    },
    final_verdaderoA1: {
        texto: "Como pudiste, cortaste un trozo de tela vieja y buscaste leña para encender una fogata. Tras ello, te sentaste en la cama, sacaste una daga mella y . pedazo de ropa, dándote prisa y apretando los dientes. Mordiste con fuerza la tela, alzaste la daga y, tras varios intentos, finalmente lograste cortar el hueso sobresaliente, apoyándote en una piedra para golpear el lomo de la daga. Durante el proceso perdiste la consciencia por unos minutos. Todo el cuerpo te temblaba y sudabas frío; hasta sostener el cuchillo se volvía una tarea imposible. Tenías el cuerpo congelado y te costaba mantenerte consciente. Tras quedarte observando la nada durante un par de minutos, finalmente agarraste la daga con fuerza y la calentaste un rato al fuego. La acercaste a la herida y la cauterizaste con la hoja al rojo vivo. —Uughuum. El aire se impregnó con un denso y nauseabundo olor a carne quemada mientras estabas a punto de desmayarte una y otra vez. El proceso duró solo unos minutos, pero el sufrimiento se sintió como horas. El olor a quemado y el dolor desgarrador fue lo único que pudiste recordar antes de que todo se volviera oscuro.",
        opciones: [
            { texto: "Fin De La Demo", destino: "finDemo" }
        ]
    },
    final_verdaderoA2: {
        texto: "Intentas usar trapos para detener el sangrado pero.. a pesar de las cantidades la sangre no deja de fluir, finalmente pierdes la conciencia en un charco de tu propia sangre",
        opciones: [
            { texto: "Fin De La Demo", destino: "finDemo" }
        ]
    },
    final_verdaderoB: {
        texto: "Decides esperar pero hacerlo provoca que tus heridas ya graves se infectan llevandote a una lenta y dolorosa muerte",
        opciones: [
            { texto: "Has Muerto", destino: "finDemo" }
            
        ]
    },
    finDemo: {
        texto: "¡Gracias por jugar a la Demo de Bajo el Sol Hueco!\n\nEsta historia continúa en desarrollo. Si te ha gustado o tienes comentarios sobre la atmósfera, mecánicas o sugerencias, ¡me encantaría conocer tu opinión!",
        desbloquearLogro: "DemoCompletada",
        opciones: [
            { texto: "Volver al Menú Principal", destino: "menu" }
        ]
    }
});