//Variáveis que guardam os valores do usuário.
var n1 = parseFloat(prompt("Digite o primeiro número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));

//Variável da média e checando se ela é maior que 5.
var media = (n1 + n2) / 2;
var maior = media > 5;

//Alert mostrando se a média é maior que 5.
alert("A média é " + maior);