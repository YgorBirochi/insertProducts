const carro = {
    marca: 'chevrolet'
}

function modificarObjeto(obj, chave, valor) {
    obj[chave] = valor;
}

modificarObjeto(carro, 'modelo', 'onix')

console.log(carro)