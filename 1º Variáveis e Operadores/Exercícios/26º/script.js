//Guardando o valor da temperatura em Celsius.
var celsius = parseFloat(prompt("Quantos graus esta fazendo (Celsius): "));

//Convertendo Celsius para Fahrenheit.
var fahr = (9 / 5) * celsius + 32;


//Mostrando a conversão.
alert(
    "Temperatura em Celsius: " + celsius + "ºC\nTemperatura em Fahrenheit: " + fahr.toFixed(1) + "ºF"
);