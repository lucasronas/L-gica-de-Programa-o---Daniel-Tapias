/*
 As condicionais nos permite representar tomadas de decisão feitas pelo ser humano, como decedir se vai compra 1 sapato ou 1 tênis. Fazendo que seja possível o programa/algoritimo executar certas ações com base no que o usuário esta escolhendo ou fazendo.

 Para fazer essas condicionais é utilizado o "if...else", caso a condição seja comprida ele irar executar o bloco de ações do "if", caso não cumpra ela sera executado o bloco de ações do "else".
*/

//Exemplo
var n1 = parseFloat(prompt("Digite a nota do 1º bimestre: "));
var n2 = parseFloat(prompt("Digite a nota do 2º bimestre: "));
var n3 = parseFloat(prompt("Digite a nota do 3º bimestre: "));
var n4 = parseFloat(prompt("Digite a nota do 4º bimestre: "));

var media = (n1 + n2 + n3 + n4) / 4;

if (media >= 6) {
    alert("Parabéns! Você passou de ano.");
} else {
    alert("Desculpa, mas você reprovou de ano.");
}