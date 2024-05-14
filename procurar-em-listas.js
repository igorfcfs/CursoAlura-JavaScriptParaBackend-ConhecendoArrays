const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNome(aluno){
    if (lista[0].includes(aluno)){
        const [alunos, medias] = lista;
        //const indice = lista[0].indexOf(aluno);
        //const mediaAluno = lista[1][indice];
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`${aluno} tem a media ${mediaAluno}.`);
    } else {
        console.log('estudante nao existe na lista')
    }
}

exibeNome('João');