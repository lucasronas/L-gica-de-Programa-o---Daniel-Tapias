//Guardando as notas do usuário.
var n1 = parseFloat(prompt("Digite sua primeira nota: "));
var n2 = parseFloat(prompt("Digite sua segunda nota: "));

//Calculando a média.
var media = (n1 + n2) / 2;


//Checando se o aluno foi aprovado ou reprovou.
if (media == 10) {

    //Exibindo a mensagem.
    alert("Aprovado com Distinção!");
} else if (media >= 7 && media < 10) {

    //Exibindo a mensagem.
    alert("Aprovado!");
} else {

    //Exibindo mensagem.
    alert("Reprovado!");
}