
//parametros de função

            //parametros
function soma(num1,num2){
    return num1+num2;
}
console.log(soma(2,2))
console.log(soma(251,452))
console.log(soma(-422,654))

//ordem dos parametros

function nomeIdade(nome,idade){
    return `meu nome é ${nome} e minha idade é ${idade}.`;
}
console.log(nomeIdade('Paulo',23))

function multiplica(numero1 = 1,numero2 = 1){
    return numero1*numero2
}
console.log(multiplica(soma(4,5),soma(3,3)))