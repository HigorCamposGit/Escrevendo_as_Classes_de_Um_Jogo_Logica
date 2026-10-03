// Criação da classe do Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método de ataque do herói
    atacar() {
        let ataque = "";

        // Verificão do tipo do herói para escolher o ataque
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }
        // Exibição da mensagem no console
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando os heróis
let mago = new Heroi("Gandalf", 100, "mago");
let guerreiro = new Heroi("Aragorn", 87, "guerreiro");
let monge = new Heroi("Saitō Musashibō Benkei", 38, "monge");
let ninja = new Heroi("Naruto Uzumaki", 17, "ninja");

// Chamando o método atacar - atacando
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
