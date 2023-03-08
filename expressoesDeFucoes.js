function minhaFuncao(param){
    //Bloco de codigo
}
//expressão de função
const soma = function(num1,num2){return num1+num2}
console.log(soma(1,1))

//Arrow_function

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma1 = (num1,num2) => num1+num2;

//Arrow com mais de uma linha

const somanumeros = (num1,num2) => {
    if(num1>10|| num2>10){
        return 'somente numeros de 1 a 9'
    }
    else{
        return num1+num2;
    }
}