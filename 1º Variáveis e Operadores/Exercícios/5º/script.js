//Variável que guarda o valor do usuário, que esta em Celsiu.
var fahre = parseFloat(prompt("Me diga qual a temperatura atual? (em Fahrenheit)"));

//Convertendo para Fahrenheit.
var celsius = (fahre - 32) * (5 / 9);

//Alert monstrando o resultado da conversão.
alert("A temperatura atual em Celsius é de: " + celsius + " °C");