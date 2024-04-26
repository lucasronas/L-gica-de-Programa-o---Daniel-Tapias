/*
    Para calcular se um ano é bissexto precisamos seguir 3 regras:

        1º Se o ano for divisível por 4, então é um ano bissexto;
        2º Se o ano for divisível por 4 e 100, então não é um ano bissexto;
        3 Caso o ano for divisível por 4, 100 e também por 400, então ele é um ano bissexto.
*/

//Guardando o valor do usuário.
var ano = parseInt(prompt("Digite um ano qualquer: "));

//Checando se é bissexto ou não.
if (
    (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)
) {

    //Ano bissexto.
    alert("O ano " + ano + " é bissexto!");
} else {

    //Não é bissexto.
    alert("O ano " + ano + " não é bissexto!");
}