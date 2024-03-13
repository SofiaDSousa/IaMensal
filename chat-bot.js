import { palavrasCursosTecnicos, palavrasEscolaFundador, palavrasMatricula, papoFurado, mostProbablyQuestion } from './can-i-answer.js'

console.log("Boa tarde, me faça uma pergunta");

let pergunta = "Qual nome do fundador?"; //aqui muda a pergunta
pergunta = pergunta.toLowerCase();
pergunta = pergunta.split(' ');

const bancos = [
    palavrasMatricula, palavrasEscolaFundador, palavrasCursosTecnicos, papoFurado,
]

    for (let i = 0; i < pergunta.length; i++) {
        for (let j = 0; j < bancos.length; j++) {
            if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
                bancos[j].matched++
            }
        }
    }


console.log(mostProbablyQuestion(pergunta));
