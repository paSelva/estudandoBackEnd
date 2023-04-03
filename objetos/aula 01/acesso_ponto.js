const cliente = {
    nome: 'José',
    idade: 32,
    CPF: '07651524365',
    email: 'jose@dominio.com'
};

console.log(`O nome do cliente é ${cliente.nome}, tem ${cliente.idade} anos, registrado no CPF de n° ${cliente.CPF} e seu email é ${cliente.email}`);

console.log(`Os trés primeiros numeros do CPF são ${cliente.CPF.substring(0,3)}`)