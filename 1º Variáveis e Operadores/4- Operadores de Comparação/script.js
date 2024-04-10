/*
 Existem varios tipos de operadores de comparação, que são eles:

 º == Igualdade (Valor);
 º != Diferente (Valor);
 º === Igualdade (Valor e Tipo de dado);
 º !== Diferente (Valor e Tipo de dado);
 º > Maior;
 º >= Maior ou Igual;
 º < Menor;
 º <= Menor ou Igual;
*/

//Exemplo do Igualdade.
var n1 = parseFloat(prompt("Digite o primeiro número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));

console.log(n1 == n2);

//Exemplo de Diferente.
console.log(n1 != n2);

//Exemplo de Igualdade (Valor e Tipo).
var n3 = "sim";
var n4 = 2;

console.log(n3 === n4);

//Exemplo de Diferente (Valor e Tipo).
console.log(n3 !== n4);

//Exemplo de Maior.
console.log(n1 > n2);

//Exemplo de Maior ou Igual.
console.log(n1 >= n2);

//Exemplo de Meno.
console.log(n1 < n2);

//Exemplo de Meno ou Igual.
console.log(n1 <= n2);