//Variáveis que guardam os valores do usuário.
var lado = parseFloat(prompt("Digite o tamanho do lado do quadrado: "));

//Calculos para saber a área e o perímetro do quadrado.
var area = lado * lado;
var peri = 4 * lado;

//Mostrando o resultado os calculos.
alert("A área do quadro é de: " + area + " cm²\nE seu perímetro é de: " + peri + " cm.")