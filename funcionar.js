import { Carro, Moto } from './veiculos.js';

const outputDiv = document.getElementById('output');

const meuCarro = new Carro('Toyota', 'Corolla', 4);
outputDiv.innerHTML += meuCarro.acelerar();
outputDiv.innerHTML += meuCarro.frear();
outputDiv.innerHTML += meuCarro.abrirPortas();
outputDiv.innerHTML += meuCarro.motor.ligar(); // Encapsulamento
outputDiv.innerHTML += meuCarro.motor.desligar(); // Encapsulamento

const minhaMoto = new Moto('Honda', 'CBR600RR', '600cc');
outputDiv.innerHTML += minhaMoto.acelerar();
outputDiv.innerHTML += minhaMoto.frear();
outputDiv.innerHTML += minhaMoto.empinar();
outputDiv.innerHTML += minhaMoto.motor.ligar(); // Encapsulamento
outputDiv.innerHTML += minhaMoto.motor.desligar(); // Encapsulamento
