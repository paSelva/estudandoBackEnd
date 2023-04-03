const clientes = require("./cliente.json");

function filtrarAptSemCompl(cliente){
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

const filtrados = filtrarAptSemCompl(clientes);

console.log(filtrados)