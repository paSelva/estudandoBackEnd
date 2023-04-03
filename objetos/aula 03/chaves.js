const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['85999999999','85989999999']
};

cliente.enderecos = [{
    rua: 'R. austria',
    numero: 09 ,
    apartamento: true,
    complemento: 'Alphaville Eusebio',
}];
const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if(chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário um endereço cadastrado. ");
}