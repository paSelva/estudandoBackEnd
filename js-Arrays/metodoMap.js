const notas = [10,9.5,8,7,6];

const notasAtualizadas = notas.map((nota)=> {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);

//alterando string com map()

const lista = ['ana julia','Caio vinicius','BIA silva'];

const nomesPadronizados = lista.map(nome => {
    return nome.toUpperCase();
});
console.log(nomesPadronizados);