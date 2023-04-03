const cliente = {
    nome: 'José',
    idade: 32,
    CPF: '07651524365',
    email: 'jose@dominio.com'
};

const chaves = ["nome", "idade", "CPF", "email"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})