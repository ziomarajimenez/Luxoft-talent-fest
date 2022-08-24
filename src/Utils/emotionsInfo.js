import heart from '../Assets/Heart.png'
import briefcase from '../Assets/Briefcase.png'
import angry from '../Assets/Angry.svg'
import concerned from '../Assets/Concerned.svg'
import frighten from '../Assets/Frighten.svg'
import sad from '../Assets/Sad.svg'

export const emotionsInfo = {
    description:
    {
        enojo: 'El enojo es una emoción caracterizada por el antagonismo hacia alguien o algo que sientes que te ha hecho daño deliberadamente. El enojo puede ser algo bueno. Puede brindarte una forma de expresar sentimientos negativos, por ejemplo, o motivarte a encontrar soluciones a los problemas. Pero el enojo excesivo puede causar problemas. El aumento de la presión arterial y otros cambios físicos asociados con el enojo hacen que sea difícil pensar con claridad y dañan su salud física y mental.',
        disgusto: 'Fuerte aversión, por ejemplo, al sabor, olor o tacto de algo considerado repugnante, o hacia una persona o comportamiento considerado moralmente repugnante.',
        miedo: 'Emoción básica e intensa que despierta la detección de una amenaza inminente, que implica una reacción de alarma inmediata que moviliza al organismo desencadenando un conjunto de cambios fisiológicos. Estos incluyen latidos cardíacos rápidos, redirección del flujo sanguíneo desde la periferia hacia el intestino, tensión de los músculos y una movilización general del organismo para actuar (ver respuesta de miedo; respuesta de lucha o huida).',
        tristeza: 'Un estado emocional de infelicidad, que varía en intensidad de leve a extrema y generalmente provocado por la pérdida de algo que se valora mucho (p. ej., por la ruptura de una relación). La tristeza persistente es uno de los dos síntomas definitorios de un episodio depresivo mayor, el otro es la anhedonia.'
    },
    messages: {
        enojo: ['Me permito enojarme porque sé que es temporal y que tarde o temprano volveré a sentirme bien', 'Cada día aprendo más sobre cómo canalizar mis emociones', 'El enojo, el orgullo y la competencia son nuestros verdaderos enemigos.', 'La risa nos mantiene más razonables que el enojo.'],
        disgusto: ['Cada día aprendo más sobre cómo canalizar mis emociones', 'Es cordura provechosa ahorrarse disgustos. La prudencia evita muchos', 'Si lo pensamos, veremos que muchos de los disgustos que nos sobrevienen lo son por palabras innecesarias.', 'Los disgustos de la vida hay que aceptarlos con buen humor porque igual que vienen, se van; no pueden durar siempre.'],
        miedo: ['Cada día aprendo más sobre cómo canalizar mis emociones', 'El valor consiste en vencer el miedo', 'He pasado toda mi vida viviendo con miedos y hoy quiero enfrentarlos.', 'Todos vivimos con miedo, pero cada día tratamos de que no nos gane.'],
        tristeza: ['Los tristes tienen dos motivos para estarlo: ignoran o esperan', 'Cada día aprendo más sobre cómo canalizar mis emociones', 'Desechad tristezas y melancolías. La vida es amable, tiene pocos días y tan sólo ahora la hemos de gozar.', 'Para la abeja laboriosa no hay tiempo de estar triste.']
    },
    words:
    {
        disgusto: ['Repugnancia', 'Aversión', 'Desaprobando', 'Ofendido', 'Horrorizado', 'Incómodo', 'Náuseas', 'Perturbado'],
        miedo: ['Preocupado', 'Dudoso', 'Nervioso', 'Ansioso', 'Aterrorizado', 'Pánico', 'Horrorizado', 'Desesperado', 'Confundido', 'Estresado'],
        tristeza: ['Solitario', 'Desconsolado', 'Melancólico', 'Decepcionado', 'Desesperanzado', 'Afligido', 'Infeliz', 'Perdido', 'Preocupado', 'Resignado', 'Miserable']
    },
    question: {
        enojo: '¿Es algo que puedas controlar?',
        disgusto: '¿Sucede continuamente',
        miedo: '¿Lo experimentas a diario?',
        tristeza: '¿Lo sientes todos los días?'
    },
    img:
    {
        enojo: angry,
        disgusto: concerned,
        miedo: frighten,
        tristeza: sad,
        personal: heart,
        laboral: briefcase,
    },
    title:
    {
        enojo: 'se siente enojado/a',
        disgusto: 'se siente disgustado/a',
        miedo: 'se siente con miedo',
        tristeza: 'se siente triste',
    }
}

export const actions = {
    step1: {
        si: 'Piensa en la situación que motivó tu emoción y del siguiente listado solo escoge 3 palabras para clasificarlo.',
        no: 'Realiza respiraciones profundas por 10 segundos',
    },
    step2: {
        si: '',
        no: '',
    },
    step3: {
        si: '',
        laboral: '',
    }
}

// export const actions = {
//     step1: {
//         emotions:
//         {
//             enojo: {
//                 si: 'Realiza respiraciones profundas por 10 segundos',
//                 no: 'Realiza respiraciones profundas por 10 segundos'
//             },
//             disgusto: {
//                 si: 'Piensa en la situación que motivó tu disgusto y del siguiente listado solo escoge 3 palabras para clasificarlo',
//                 no: 'Realiza respiraciones profundas por 10 segundos'
//             },
//             miedo: {
//                 si: 'Piensa en la situación que motivó tu miedo y del siguiente listado solo escoge 3 palabras para clasificarlo',
//                 no: 'Realiza respiraciones profundas por 10 segundos'
//             },
//             tristeza: {
//                 si: 'Piensa en la situación que motivó tu tristeza y del siguiente listado solo escoge 3 palabras para clasificarlo',
//                 no: 'Realiza respiraciones profundas por 10 segundos'
//             },
//         }
//     },
//     step2: {
//         emotions:
//         {
//             enojo: {
//                 si: 'Escribe 3 puntos de cómo lo puedes controlar y reflexiona sobre cada punto, en una hoja de papel o dando clic en botón “Escribir”',
//                 no: 'Golpea la almohada virtualmente'
//             },
//             disgusto: {
//                 si: 'Para cada palabra escribe una acción que te pueda ayudar a contrarrestar ese sentimiento',
//                 no: 'Golpea la almohada virtualmente'
//             },
//             miedo: {
//                 si: 'Para cada palabra escribe una acción que te pueda ayudar a contrarrestar ese sentimiento',
//                 no: 'Colorea el mandala'
//             },
//             tristeza: {
//                 si: 'Para cada palabra escribe una acción que te pueda ayudar a contrarrestar ese sentimiento.',
//                 no: 'Colorea el siguiente mándala'
//             },
//         }
//     },
//     step3: {
//         emotions:
//         {
//             enojo: {
//                 si: 'Toma un poco de distancia (tiempo para reflexionar) antes de hablar con la persona que te hizo sentir enojado/a y después ya con calma platica con esta persona sobre los 3 puntos que escribiste (si así lo deseas).',
//                 no: 'Escucha el siguiente audio:'
//             },
//             disgusto: {
//                 si: 'Busca a alguien y platícale acerca de la situación que te hizo sentir disgustada/o y sobre tus ideas de cómo se podría contrarrestar ese sentimiento.',
//                 no: 'Escucha el siguiente audio:'
//             },
//             miedo: {
//                 si: 'Reflexiona sobre lo escrito anteriormente y hazte las siguientes preguntas. Además, busca a una persona para platicar sobre tus sentimientos, acciones y respuestas.',
//                 no: 'Realiza respiraciones profundas por 10 segundos'
//             },
//             tristeza: {
//                 si: 'Busca a alguien y platícale acerca de la situación que te hizo sentir triste y sobre tus ideas de cómo se podría contrarrestar ese sentimiento.',
//                 no: 'Escucha el siguiente audio:'
//             },
//         }
//     }
// }