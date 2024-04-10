/*
 Conversão de Dados serve para transferir um tipo de dado para outro, como de Number para String e vice-verso.

 Para fazer a conversão pode utilizar o "parseInt", que serve para converter a String em um Number Inteiro, ou "parseFloat", que serve para converter a String em um Number Real.
*/

//Exemplo
var n1 = parseFloat(prompt("Digite o primeiro número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));

//typeof serve para saber qual o tipo de dado que a variável guarda.
console.log(typeof n1);
console.log(typeof n2);

var soma = n1 + n2;
alert("A soma dos valores é de " + soma);