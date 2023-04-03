const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['85999999999','85989999999'],
    saldo: 200,
    efetuaPagamento : function(valor){
        if (valor > this.saldo){
            console.log('Saldo insuficiente');
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    }
};
cliente.efetuaPagamento(25);
