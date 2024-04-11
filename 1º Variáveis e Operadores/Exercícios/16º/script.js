//Variáveis que guardam as duas notas do usuário.
var n1 = parseFloat(prompt("Digite sua 1º nota: "));
var n2 = parseFloat(prompt("Digite 2º nota: "));

//Calculo da média.
var media = (n1 + n2) / 2;

//Checando se o alunou foi aprovado, reprovado ou aprovado com nota 10.
if (media == 10) {

    //Alert avisando que passou com 10.
    alert("Aprovado com Distinção!");
} else if (media >= 7 && media < 10 ) {

    //Alert avisando que passou.
    alert("Aprovado!");
} else {

    //Alert avisando que reprovou.
    alert("Reprovado!");
}