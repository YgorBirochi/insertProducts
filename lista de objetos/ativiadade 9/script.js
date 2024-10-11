function verificandoPropriedades(obj, chave){
    return chave in obj
}

const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor'
  };
  
  console.log(verificandoPropriedades(pessoa, 'nome'));
  console.log(verificandoPropriedades(pessoa, 'cidade'));