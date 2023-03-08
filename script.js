//tipagem dinamica
//untyped

//Erros identificando

const numero = 1;
console.log(numero)

//console.log = registro 
//tratamento de erro
console.error('deu erro')
//console.error() para exibir mensagens de erro;
//console.table() para visualizar de forma mais organizada informações tabulares;
//console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
//console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

// == (comparacao implicita)

const numero1 = 5;
const texto = '5';
console.log(numero1 == texto)

// === (comparacao explicita)

console.log(numero1 === texto)

const idadeMinima = 18;
const idadeCliente = 16;

if(idadeCliente >= idadeMinima){
    console.log('cerveja')
}
else{
    console.log('suco')
}
            //condicao                  true        false
console.log(idadeCliente>=idadeMinima ? 'cerveja' : 'suco')