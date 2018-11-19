import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestVocService {

  private pregunta:Preguntas[]=[
    {
      pregunta: "A parte de los libros que te mandan en la escuela ¿con qué frecuencia lees?",
      respuesta1: "Nunca",
      respuesta2: "De vez en cuando",
      respuesta3: "Siempre que tengo ocasión"
    },
    {
      pregunta: "¿Qué haces cuando estás enfermo y te mandan tomar un medicamento?",
      respuesta1: "Sencillamente lo tomo",
      respuesta2: "Miro qué contraindicaciones puede tener",
      respuesta3: "Leo el prospecto de arriba a abajo."
    },
    {
      pregunta: "Tu nota media de matemáticas en la preparatoria fue de:",
      respuesta1: "Entre 5 y 6'9",
      respuesta2: "Entre 7 y 8'9",
      respuesta3: "Entre 9 y 10."
    },
    {
      pregunta: "El trato con animales:",
      respuesta1: "Me es indiferente.",
      respuesta2: "Me resulta interesante",
      respuesta3: "Me encanta."
    },
    {
      pregunta: "Del 1 al 10 ¿con qué soltura te desenvuelves con la computadora?",
      respuesta1: "Del 0 al 5.",
      respuesta2: "Del 5 al 7",
      respuesta3: "MDel 7 al 10."
    },
    {
      pregunta: "¿Estarías de acuerdo en trabajar en una revista de economía escribiendo artículos?",
      respuesta1: "Preferiría no tener que hacerlo",
      respuesta2: "Sí, me gustaría.",
      respuesta3: "Sería un trabajo muy gratificante."
    },
    {
      pregunta: "¿¿Te interesa saber cómo funcionan aparatos que usas a diario como el celular, la televisión o la computadora?",
      respuesta1: "Nada",
      respuesta2: "Algo.",
      respuesta3: "Mucho"
    },
    {
      pregunta: "Cuando quieres comprarte algo:",
      respuesta1: "Pides el dinero a tus padres",
      respuesta2: "Pides una parte del dinero a mis padres..",
      respuesta3: "Ahorras y lo compras cuando haya reunido todo el dinero."
    },
    {
      pregunta: "En general ¿te gusta resolver problemas matemáticos?",
      respuesta1: "Nada",
      respuesta2: "Algo.",
      respuesta3: "Mucho"
    },
    {
      pregunta: "El funcionamiento de la célula te parece:",
      respuesta1: "Indiferente",
      respuesta2: "Interesante.",
      respuesta3: "Fascinante"
    },
    {
      pregunta: "¿Perteneces a alguna asociación de ayuda social?",
      respuesta1: "No entra en mis planes.",
      respuesta2: "Es algo que quiero hacer más adelante..",
      respuesta3: "Ya participo activamente en una."
    },
    {
      pregunta: "Los artículos de divulgación científica te parecen:",
      respuesta1: "Aburridos",
      respuesta2: "Entretenidos",
      respuesta3: "Muy interesantes."
    },
    {
      pregunta: "En general ¿has obtenido buenas calificaciones en actividades de laboratorio?",
      respuesta1: "Regulares",
      respuesta2: "Buenas",
      respuesta3: "Muy buenas."
    },
    {
      pregunta: "¿Te gustaría estudiar en profundidad un idioma?",
      respuesta1: "Me resulta aburrido",
      respuesta2: "Es algo que tengo planeado en el futuro.",
      respuesta3: "Ya estoy haciéndolo."
    },
    {
      pregunta: "¿Cómo te sientes cuando hablas en público?",
      respuesta1: "Incómodo",
      respuesta2: "No tengo ningún inconveniente en hacerlo con frecuencia.",
      respuesta3: "YMe encanta ser el centro de atención."
    },
    {
      pregunta: "¿Tratas de entender el comportamiento de tus amigos cuando surge un problema?",
      respuesta1: "Es algo que no me preocupa",
      respuesta2: "Muestro cierta empatía",
      respuesta3: "Intento profundizar todo lo posible en el asunto."
    },
    {
      pregunta: "Tu nota media de biología en la preparatoria fue de:",
      respuesta1: "Entre 5 y 6'9.",
      respuesta2: "Entre 7 y 8'9",
      respuesta3: "Entre 9 y 10."
    },
    {
      pregunta: "¿Te gusta la vida rural?",
      respuesta1: "No, deseo vivir siempre en la ciudad..",
      respuesta2: "No me importa pasar algunas temporadas en el campo.",
      respuesta3: "Es un estilo de vida que me encanta.."
    },
    {
      pregunta: "Si te hacen una extracción de sangre:",
      respuesta1: "Me mareo tan solo de ver la aguja",
      respuesta2: "Me siento tranquilo.",
      respuesta3: "Converso con la enfermera."
    },
    {
      pregunta: "¿Te consideras una persona creativa e imaginativa?",
      respuesta1: "Poco",
      respuesta2: "Algo",
      respuesta3: "Mucho"
    },
    {
      pregunta: "¿Tienes un registro personal de gastos?",
      respuesta1: "No, no lo necesito.",
      respuesta2: "Sí, anoto las cosas más importantes.",
      respuesta3: "Sí, tengo un registro muy detallado."
    },
    {
      pregunta: "Las técnicas de primeros auxilios.",
      respuesta1: "...no tengo pensado aprenderlas.",
      respuesta2: "..me parecen importantes.",
      respuesta3: "..las conozco a la perfección."
    },
    {
      pregunta: "Cuando un amigo no entiende algo:",
      respuesta1: "Ignoro su problema.",
      respuesta2: "Le explico las cosas por encima.",
      respuesta3: "Le ayudo hasta que lo comprende por completo."
    },
    {
      pregunta: "En comparación con gente de tu edad, destacas en música, creatividad u otra forma de arte.",
      respuesta1: "Nada",
      respuesta2: "Algo",
      respuesta3: "Mucho"
    },
    {
      pregunta: "¿Qué haces si sientes alguna dolencia?.",
      respuesta1: "La ignoro a menos que permanezca de manera prolongada.",
      respuesta2: "Voy al doctor en un plazo razonable.",
      respuesta3: "Busco información en Internet, consulto a algún conocido y voy al doctor."
    },
    {
      pregunta: "Cuando tienes que explicar algo a otra persona...",
      respuesta1: "...me desespero si no me entiende a la primera.",
      respuesta2: "...trato de ser claro.",
      respuesta3: "...se lo repito con calma las veces que haga falta."
    },
    {
      pregunta: "¿Con qué frecuencia visitas una exposición artística?",
      respuesta1: "Nunca",
      respuesta2: "Cuando me parece interesante.",
      respuesta3: "Siempre que tengo ocasión."
    },
    {
      pregunta: "¿Qué haces cuando se descompone algún electrodoméstico en casa?",
      respuesta1: "Lo llevo al servicio técnico.",
      respuesta2: "Trato de repararlo.",
      respuesta3: "Leo el instructivo, busco información en Internet y hago todo lo posible por arreglarlo."
    },
    {
      pregunta: "Cuando sales con los amigos...",
      respuesta1: "..tratas de evitar ir a bailar.",
      respuesta2: "...no te desagrada tener que ir a bailar.",
      respuesta3: "...propones con frecuencia ir a bailar."
    },
    {
      pregunta: "¿Trabajarías en tus ratos libres como profesor particular?",
      respuesta1: "Bajo ningún concepto",
      respuesta2: "Lo haría en caso de que necesitara el dinero.",
      respuesta3: "Sin ninguna duda."
    },
    {
      pregunta: "¿Qué haces cuando tienes una meta bien definida?",
      respuesta1: "Espero tener suerte para alcanzarla.",
      respuesta2: "Me esfuerzo por lograrla.",
      respuesta3: "Me trazo un plan bien detallado para alcanzarla."
    },
    {
      pregunta: "¿Prefieres trabajar con máquinas o con personas?",
      respuesta1: "Con personas, siempre.",
      respuesta2: "Me es indiferente, aunque utilizo con soltura las máquinas.",
      respuesta3: "Con máquinas, siempre."
    }
   
   
   
   
    
    
  ];


  constructor() { 
    console.log("servicio listo");
  }
  getPregunta():Preguntas[]{
    return this.pregunta;
}
  
}
export interface Preguntas{
  pregunta:string;
  respuesta1:string;
  respuesta2:string;
  respuesta3:string;
  
}
