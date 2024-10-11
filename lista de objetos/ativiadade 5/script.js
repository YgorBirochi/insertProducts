const pessoa ={
    nome: 'Ygor',
    idade: 18,
}

function imprimirPropriedades(obj) {
    for (let chave in obj) {
      console.log(`Chave: ${chave}, Valor: ${obj[chave]}`);
    }
  }


console.log(imprimirPropriedades(pessoa))