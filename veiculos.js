class Motor {
    constructor(tipo) {
        this.tipo = tipo; // Encapsulado
    }

    ligar() {
        return `O motor ${this.tipo} está ligado.<br>`; // Metodo
    }

    desligar() {
        return `O motor ${this.tipo} está desligado.<br>`; // Metodoes
    }
}

// Herança
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca; // Atributo
        this.modelo = modelo; // Atributo
        this.motor = new Motor('Padrão'); // Composição
    }

    acelerar() {
        return `O ${this.marca} ${this.modelo} está acelerando.<br>`;
    }

    frear() {
        return `O ${this.marca} ${this.modelo} está freando.<br>`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, numPortas) {
        super(marca, modelo);
        this.numPortas = numPortas;
        this.motor = new Motor('V6'); // Polimorfismo
    }

    abrirPortas() {
       return `Abrindo ${this.numPortas} portas do ${this.marca} ${this.modelo}.<br>`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    empinar() {
        return `A ${this.marca} ${this.modelo} está empinando.<br>`;
    }
}

export {Moto, Carro, Veiculo, Motor};
