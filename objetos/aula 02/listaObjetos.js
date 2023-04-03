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

cliente.enderecos.push({
    rua: 'Baubino',
    numero: 01 ,
    apartamento: false,
    complemento: 'Sitio',
});

console.log(cliente);

const listaApenasApts = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)
console.log(listaApenasApts)