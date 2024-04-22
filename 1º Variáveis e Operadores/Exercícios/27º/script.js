//Guardando o valor da temperatura de Fahrenheit.
var farh = parseFloat(prompt("Quantos graus esta fazendo (Fahrenheit):"));

//Convertendo Fahrenheit para Celsius.
var celsius = (farh - 32) * (5 / 9);

//Mostrando a conversão.
alert(
    "Temperatura em Fahrenheit: " + farh + " ºF\nTemperatura em Celsius: " + celsius.toFixed(1) + " ºC"
)