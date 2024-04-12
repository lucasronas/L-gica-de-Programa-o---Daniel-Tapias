//Guarda os dois números fornecidos pelo usuário.
var n1 = parseInt(prompt("Digite um número: "));
var n2 = parseInt(prompt("Digite outro número: "));

//Guardando o valor da primeira variável em outra e depois trocando o valor da primeira pela segunda e da segunda pela primeira.
var aux = n1;
n1 = n2;
n2 = aux;

//Mostrando os valores trocados.
alert("Antes\nNúmero1: " + n2 + "\nNúmero2: " + n1 + "\nAgora\nNúmero1: " + n1 + "\nNúmero2: " + n2);