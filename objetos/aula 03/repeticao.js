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
for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}