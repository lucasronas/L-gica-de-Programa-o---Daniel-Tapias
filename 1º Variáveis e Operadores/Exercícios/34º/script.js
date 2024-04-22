//Guardando os três números fornecidos pelo usuário.
var n1 = parseFloat(prompt("Digite o primeiro número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));
var n3 = parseFloat(prompt("Digite o terceiro número: "));

//Variáveis auxiliares.
var maior;
var meio;
var menor;

//Checando qual o maior.
if (n1 > n2 && n1 > n3) {

    //Guardando o Maior
    maior = n1;
} else if (n2 > n1 && n2 > n3) {

    //Guardando o Maior
    maior = n2;
} else {

    //Guardando o Maior
    maior = n3;
}

//Checando qual o menor.
if (n1 < n2 && n1 < n3) {

    //Guardando o Menor.
    menor = n1;
} else if (n2 < n1 & n2 < n3) {

    //Guardando o Menor.
    menor = n2;
} else {

    //Guardando o Menor.
    menor = n3;
}

//Checando qual o do meio.
if (
    (n1 > n2 && n1 < n3) || (n1 > n3 && n1 < n2)
) {

    //Guardando o Menor.
    meio = n1;
} else if (
    (n2 > n1 && n2 < n3) || (n2 > n3 && n2 < n1)
) {

    //Guardando o Menor.
    meio = n2;
} else {

    meio = n3;
}

//Exibindo a ordem decrescente.
alert(
    "Ordem Fornecida: " + n1 + ", " + n2 + ", " + n3 + "\nOrdem Decrescente: " + maior + ", " + meio + ", " + menor
)