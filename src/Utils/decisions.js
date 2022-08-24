export const decisions = (step, emotion, answer, source) => {
    if (emotion === 'enojo') {
        if (step === '1') {
            return 'respirar'
        } else if (step === '2') {
            if (answer === 'si') {
                return 'escribir'
            } else {
                if (source === 'personal') {
                    return 'amohada'
                } else {
                    return 'costal'
                }
            }
        } else if (step === '3') {
            if (answer === 'si') {

            }
        }
    } else {
        if (step === 1) {

        }
    }
}

// enojo: angry,
//         disgusto: concerned,
//         miedo: frighten,
//         tristeza: sad,
//         personal: heart,
//         laboral: briefcase,

// mandala
// respirar
// seleccionar
// describir
// audio
// almohada
//escribir
