/*
 Existem varios tipos de operadores aritméticos, que são:

    º + Adição;
    º - Subtração;
    º * Multiplicação;
    º / Divisão;
    º % Módulo;
    º ** Exponenciação;
    º ++ Incrementação;
    ª -- Decrementação.
*/


// Módulo serve para mostra o resto da divisão, ele é bastante utilizado para mostra a média, para fazer a média basta somar os valores fornecidos e dividir eles pela quantidade de valores fornecido, como o exemplo a baixo mostra.
var n1 = parseFloat(prompt("Digite o primeiro número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));

var media = (n1 + n2) / 2;

alert("A média de " + (n1 + n2) + " é de: " + media);

// Exponenciação server para elevar o primeiro valor pelo segundo valor, como é mostrado a baixo.
var expon = n1 ** n2;

alert(n1 + " elevado a " + n2 + " é igual a: " + expon);

// Incrementação e Decrementação servem par aumentar e diminuir o valor da variável em 1.
var incremento = 5;
var decremento = 5;

incremento++;
decremento--;
alert("Incremento: " + incremento + "\nDecremento: " + decremento);