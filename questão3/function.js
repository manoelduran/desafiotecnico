class Urna {
    constructor() {
        this.votosValidos = 500000;
        this.votosBranco = 100000;
        this.votosNulos = 50000;
        this.totalEleitores = 700000;
    }
    perctVotosValidos(){
        alert('Você me clicou') 
       let v1 = (this.votosValidos / this.totalEleitores) * 100;
        console.log(`O percentual dos votos validos em relação ao total de eleitores é ${v1.toFixed(2)}%`)
    }
    perctVotosBrancoseNulos(){
        alert('Você me clicou')
        let v2 = (this.votosBranco / this.totalEleitores) * 100;
        let v3 = (this.votosNulos / this.totalEleitores) * 100;
        console.log(`O percentual dos votos brancos é de ${v2.toFixed(2)}% enquanto o de votos nulos é de ${v3.toFixed(2)}% em relação ao total de eleitores.`) 
    }
    perctEleitores(){
        alert('Você me clicou')
        let EleitorSemVotar = (this.totalEleitores - (this.votosValidos + this.votosBranco + this.votosNulos));
        let v4 = (EleitorSemVotar / this.totalEleitores) * 100;
        console.log(`O percentual de eleitores que se abstiveram em relação ao total de eleitores é ${v4.toFixed(2)}%`)
    }
} 
var urna = new Urna()