const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjore', 'Leo'];

listaEstudantes.splice(1, 2); // o 1 e iclusivo, o segundo parametro indica a qtde de elementos a serem deletados a partir do indice

listaEstudantes.splice(1, 2, 'Rodrigo');
//listaEstudantes.push('Rodrigo');

console.log(listaEstudantes);