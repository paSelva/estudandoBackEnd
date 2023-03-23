//filtrando

const alunos =['ana','marcos','mauro'];
const notas = [7,4.5,8,7.5];

const reprovados = alunos.filter((aluno,indice)=>{
    return notas[indice] < 7;
});
//console.log(reprovados);

//Calculando media geral de todas as salas

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    },0)
    
    const media = somaDasNotas / notasDaSala.length;

    return media
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

// CRIANDO CÓPIAS

const alunoNota = [7,7,8,9];

const novaNotas = [...alunoNota];

novaNotas.push(10);

console.log(`As novas notas são ${novaNotas}.`);
console.log(`As notas originais são ${alunoNota}.`);

//Set.js

const nomeAlunos = ['ana','clara','maria','maria','joao','joao','joao'];

const novaLista = [...new Set(nomeAlunos)];

console.log(nomeAlunos)
console.log(novaLista);

