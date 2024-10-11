let listObjeto = [
    {
        nome: 'jão',
        idade: 14,},
    {
        nome: 'julia',
        idade: 18,},
    {
        nome: 'ana',
        idade: 10,}
];

function pessoaVelha(listObjeto) {
    let maisVelha = listObjeto[0];

    for (let i = 1; i < listObjeto.length; i++) {
        if (listObjeto[i].idade > maisVelha.idade) {
            maisVelha = listObjeto[i];
        }
    }

    return maisVelha.nome;
}
const nomeDaPessoaMaisVelha = pessoaVelha(listObjeto);
console.log(`A pessoa mais velha é: ${nomeDaPessoaMaisVelha}`);
