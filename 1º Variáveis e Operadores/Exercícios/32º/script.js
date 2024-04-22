//Guardando os três números fornecidos.
var n1 = parseFloat(prompt("Digite o primero número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));
var n3 = parseFloat(prompt("Digite o terceiro número: "));

//Variável para auxiliar.
var maior;
var menor;

//Checando qual o maior número.
if (n1 > n2 && n1 > n3) {

    //Guardando o valor.
    maior = n1;
} else if (n2 > n1 && n2 > n3) {

    //Guardando o valor.
    maior = n2;
} else {

    //Guardando o valor.
    maior = n3;
}

//Checando qual o menor número.
if (n1 < n2 && n1 < n3) {

    //Guardando o valor.
    menor = n1;
} else if (n2 < n1 && n2 < n3) {

    //Guardando o valor.
    menor = n2;
} else {

    //Guardando o valor.
    menor = n3;
}

//Exibindo o maior e o menor número.
alert(
    "Sequencia de número fornecida: " + n1 + ", " + n2 + ", " + n3 + "\nMaior número: " + maior + "\nMenor número: " + menor
)