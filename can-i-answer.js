export const palavrasEscolaFundador = {
    probablyWords: [
        "quem", "fundou", "a", "escola",
        "sabe", "me", "dizer", "criou",
        "foi", "o", "criador", "da", "instituição", "educacional"
    ],
    matched: 0,
   
}

// Cursos técnicos
export const palavrasCursosTecnicos = {
    probablyWords: [
        "qual", "curso", "técnico", "a", "escola",
        "oferece", "sabe", "me", "dizer", "são",
        "os", "da", "instituição", "disponível",
        "na", "área", "técnica", "quais", "cursos", "técnicos"
    ],
    matched: 0,
    
}

// Matricular e rematricular
export const palavrasMatricula = {
    probablyWords: [
        "quem", "quer", "saber", "matricular", "um", "filho",
        "ou", "rematricular", "uma", "filha", "sabe", "me",
        "dizer", "como", "fazer", "a", "matrícula", "rematrícula",
        "de", "seu", "filho", "sua", "filha", "quais", "são",
        "os", "documentos", "necessários", "para", "a", "matrícula",
        "rematrícula", "na", "escola"
    ],

    matched: 0,
}
    export const papoFurado = {
        probablyWords: ["série", "amor", "bem", "é", "queijo", "futebol", "idade", "sua", "casa", "mora", "política", "bolo", "revistas", "televisão"],
        matched: 0,
    }



export const todosBancos = [palavrasEscolaFundador, palavrasCursosTecnicos, palavrasMatricula,papoFurado]

function showAnswer(index) {
    switch (index) {
        case 1:
            return console.log("Quem fundou a escola foi Bento Quirino.")
        case 2:
            return console.log("Oferecemos os cursos técnicos de informática, publicidade, biotécnologia, edificações.. etc")
        case 0:
            return console.log("Para matricular/rematricular entre no nosso site ou em contato com a escola.")
        default:
            return console.log("Infelizmente não posso ajudá-lo com este assunto.")
    }
}



export function mostProbablyQuestion() {
    let matches = [
        palavrasEscolaFundador.matched, 
        palavrasCursosTecnicos.matched, 
        palavrasEscolaFundador.matched,
        papoFurado.matched

    ]
    console.log(matches)
    console.log(Math.max(...matches))
    console.log(matches.indexOf(Math.max(...matches)))

    return showAnswer(matches.indexOf(Math.max(...matches)))
}