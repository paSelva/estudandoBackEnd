//tipo de dados
//booleanos

//conversao implicita
const numero = 456;
const numeroString ='456';

console.log(numero===numeroString)
console.log(numero==numeroString)

console.log(numero + numeroString)

//conversao explicita

//Number() = transforma string em numero, se a string tiver letras o resultado é NaN
//String() = tranforma numero em string

console.log(numero + Number(numeroString))