const aluno = {
    nome: 'Ygor Birochi',
    dataNascimento: new Date('2007-07-19'),
    serie: '2° ano A',
    boletim: {
        primeiroBimestre: {
            portugues: 8.0,
            matematica: 9.0,
            geografia: 8.5,
            artes: 9.0,
        },
        segundoBimestre: {
            portugues: 7.5,
            matematica: 8.5,
            geografia: 9.0,
            artes: 9.0,
        }
    },
    infoAluno() {
        console.log(`${this.nome}\nData de nascimento: ${this.dataNascimento.toLocaleDateString()}\nSérie: ${this.serie}`);
    },
    idadeAluno() {
        const hoje = new Date();
        const nascimento = this.dataNascimento;
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const diferencaMes = hoje.getMonth() - nascimento.getMonth();
        const diferencaDia = hoje.getDate() - nascimento.getDate();
        if (diferencaMes < 0 || (diferencaMes === 0 && diferencaDia < 0)) {
            idade--;
        }

        console.log(`O aluno ${this.nome} tem ${idade} anos`);
    },
    desempenhoGeral() {
        const boletim = this.boletim;
        const portugues = (boletim.primeiroBimestre.portugues + boletim.segundoBimestre.portugues) / 2;
        const geografia = (boletim.primeiroBimestre.geografia + boletim.segundoBimestre.geografia) / 2;
        const matematica = (boletim.primeiroBimestre.matematica + boletim.segundoBimestre.matematica) / 2;
        const artes = (boletim.primeiroBimestre.artes + boletim.segundoBimestre.artes) / 2;
        const mediaAno = (portugues + geografia + matematica + artes) / 4;

        console.log(`A média do ano das matérias ficou:
        Matemática: ${matematica.toFixed(2)}
        Português: ${portugues.toFixed(2)}
        Geografia: ${geografia.toFixed(2)}
        Artes: ${artes.toFixed(2)}
        Média geral: ${mediaAno.toFixed(2)}`);
    },
    passouDeAno() {
        const boletim = this.boletim;
        const portugues = (boletim.primeiroBimestre.portugues + boletim.segundoBimestre.portugues) / 2;
        const geografia = (boletim.primeiroBimestre.geografia + boletim.segundoBimestre.geografia) / 2;
        const matematica = (boletim.primeiroBimestre.matematica + boletim.segundoBimestre.matematica) / 2;
        const artes = (boletim.primeiroBimestre.artes + boletim.segundoBimestre.artes) / 2;
        const mediaAno = (portugues + geografia + matematica + artes) / 4;

        if (mediaAno >= 6) {
            console.log(`O aluno ${this.nome} passou de ano com média ${mediaAno.toFixed(2)}`);
        } else {
            console.log(`O aluno ${this.nome} não passou de ano. Média final: ${mediaAno.toFixed(2)}`);
        }
    },
};

aluno.infoAluno();
aluno.idadeAluno();
aluno.desempenhoGeral();
aluno.passouDeAno();
