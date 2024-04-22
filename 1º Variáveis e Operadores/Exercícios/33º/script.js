//Guardando os números inteiros.
var n1 = parseInt(prompt("Digite o primeiro número inteiro (sem vírgula): "));
var n2 = parseInt(prompt("Digite o segundo número inteiro (sem vírgula): "));

//Variável auxiliar.
var aux;

//Invertendo os valores.
aux = n1;
n1 = n2;
n2 = aux;

//Exibindo o antes e depois.
alert(
    "Antes: \nPrimeiro Número: " + aux + "\nSegundo Número: " + n1 + "\n\nDepois: \nPrimeiro Número: " + n1 + "\nSegundo Número: " + n2
);