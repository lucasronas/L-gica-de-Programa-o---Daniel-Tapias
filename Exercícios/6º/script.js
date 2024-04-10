//Variável que guarda o valor do usuário.
var money = parseFloat(prompt("Quanto de dinheiro você tem?"));

//Variável que guarda quantos litros ele consegue comprar e quantos kilometros o carro faz com essa quantidade.
var litros = money / 5;
var kilometros = litros * 20;

//Alert monstrando quanto ele pode compra e quantos kilometros ele faz com essa quantidade;
alert("Você consegue compra " + litros + " L e faz " + kilometros + " km com essa quantidade!");