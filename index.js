// CLASSES E OBJETOS 
class Heroi {
    constructor(nome, idade, tipo) {
        // VARIÁVEIS / PROPRIEDADES (Atributos do objeto)
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // FUNÇÕES e MÉTODOS Ação da classe.
    atacar() {
        let ataque = ""; // Variável local

        // ESTRUTURAS DE DECISÕES if / else if e OPERADORES de comparação ===
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        // Exibe o resultado direto na tela branca da página no console da W3Schools, quebra a linha <br>)
        document.write(`O ${this.tipo} atacou usando ${ataque}<br>`);
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// OBJETOS Instanciando os heróis com o new, criador de um novo objeto.
let herois = [
    new Heroi("Gandalf", 100, "mago"),
    new Heroi("Aragorn", 87, "guerreiro"),
    new Heroi("Saitō Musashibō Benkei", 38, "monge"),
    new Heroi("Naruto Uzumaki", 17, "ninja")
];

//LAÇO DE REPETIÇÃO for que percorre a lista de heróis e FUNÇÕES Invocando ".atacar()".
for (let heroi of herois) {
    heroi.atacar();
}

// Chamando o método atacar.
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
