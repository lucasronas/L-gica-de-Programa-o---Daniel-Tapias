//Variável que guarda o valor do usuário, que esta em Celsiu.
var celsiu = parseFloat(prompt("Me diga qual a temperatura atual? (em Celsius)"));

//Convertendo para Fahrenheit.
var fahre = (celsiu * (9 / 5)) + 32;

//Alert monstrando o resultado da conversão.
alert("A temperatura atual em Fahrenheit é de: " + fahre + " °F");