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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0],cliente.telefone[1]);
//OU
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    endereco: cliente.enderecos[0].rua,
    // Pegando endereço e fazendo com todos os elementos.
}
console.log(encomenda);

const encomenda2 = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}
console.log(encomenda2);