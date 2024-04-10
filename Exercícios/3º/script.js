// Variáveis que guardam os valores do usuário.
var n1 = parseFloat(prompt("Digite o primeiro número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));

// Variável do Módulo e do Exponenciação.
var modulo = n1 % n2;
var expone = n1 ** n2;

// Alert mostrando o resultado do Módulo e da Exponenciação.
alert("O resto da divisão de " + n1 + " por " + n2 + " é: " + modulo);
alert("O número " + n1 + " elevado a " + n2 + " é: " + expone);
