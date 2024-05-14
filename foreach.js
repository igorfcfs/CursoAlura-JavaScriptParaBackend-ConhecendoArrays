const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;


// metodo callback - o parametro do forecach e uma funcao que e chamado de volta quando executamos a funcao foreach; funcoes que chamam outras funcoes dentro delas 
//notas.forEach(function x (nota){// essa funcao e executada para cada elemento do array
//    somaNotas += nota;
//});

notas.forEach(somaNotas);

function somaNotas(nota){
    somaDasNotas += nota;
}

const media = somaDasNotas/notas.length;
console.log(`a media das notas e ${media}`)