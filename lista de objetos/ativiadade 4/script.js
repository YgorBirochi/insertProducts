const pessoa = {
    nome: 'Ygor',
    cumprimentar() {
        return `Olá, meu nome é ${this.nome}`;
    }
};
console.log(pessoa.cumprimentar());
