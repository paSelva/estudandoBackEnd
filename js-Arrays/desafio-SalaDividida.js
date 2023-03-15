//dividindo uma lista
const alunos = ['joão','juliana','ana','caio','lara','marjorie','guilherme','aline','fabiana','andre','carlos','paulo','bia','vivian','isabela','vinicios','renan','renata','daisy','camilo'];

const sala1 = alunos.slice(0,alunos.length/2);
const sala2 = alunos.slice(alunos.length/2);

//console.log(sala1)
//console.log(sala2)

//DESAFIO - Atualizando elementos

const alunos1 = ['joao','ana','caio','lara','marjorie','leo'];

alunos1.splice(1,2, 'rodrigo');
//console.log(alunos1)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

//console.log(animaisDoAquario)

//JUNTANDO SALA

const salaJS = ['evaldo','camis','mari']
const salaPyton = ['ju','leo','raquel']

const salaUnificada = salaJS.concat(salaPyton)

//console.log(salaUnificada);

const salaX = ['evaldo','camis','mari','joao']
const medias = [10,8,7.5,9]

const listaDeAlunosEMedias = [salaX,medias];

console.log(`O(A) aluno(a) na terceira posição da sala é o(a) ${listaDeAlunosEMedias[0][1]}. A nota do(a) aluno(a) é ${listaDeAlunosEMedias[1][1]}.`);




