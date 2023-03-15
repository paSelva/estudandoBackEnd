//Procurar um nome em uma lista

const salaX = ['evaldo','camis','mari','joao']
const medias = [10,8,7.5,9]

const listaDeAlunosEMedias = [salaX,medias];

function exibeNomeNota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        //const alunos = listaDeAlunosEMedias[0]
        //const mediasX = listaDeAlunosEMedias[1]

        const [alunos, mediasX] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaAluno = mediasX[indice];

        console.log(`A media do aluno ${aluno} é ${mediaAluno}`);
    }
    else{
       console.log('Aluno não encontrado') 
    }
}
exibeNomeNota('joao');