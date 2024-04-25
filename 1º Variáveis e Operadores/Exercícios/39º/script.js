//Guardando os valores do usuário.
var n1 = parseFloat(prompt("Digite sua primeira nota: "));
var n2 = parseFloat(prompt("Digite sua segunda nota: "));

//Calculando a média e variáveis auxiliar.
var media = (n1 +  n2) / 2;
var mensagem;
var nota;

//Checagem.
if (media >= 9 && media <= 10) {

    //Guardando o valor da mensagem e nota.
    mensagem = "Aprovado!";
    nota = "A";
} else if(media >= 7.5 && media < 9) {

    //Guardando o valor da mensagem e nota.
    mensagem = "Aprovado!";
    nota = "B";
} else if (media >= 6 && media < 7.5) {

    //Guardando o valor da mensagem e nota.
    mensagem = "Aprovado!";
    nota = "C";
} else if (media >= 4 && media < 6) {

    //Guardando o valor da mensagem e nota.
    mensagem = "Reprovado!";
    nota = "D";
} else if (media >= 0 && media < 4) {

    //Guardando o valor da mensagem e nota.
    mensagem = "Reprovado!";
    nota = "E";
} else {

    //Caso não seja digitado um número.
    alert("Valor Inválido! Por favor, digite apenas números.");
}

//Mostrando as notas, a média, o conceito correspondente e a mensagem pro usuário.
alert(
    "Informações do Aluno:\nNotas: " + n1 + ", " + n2 + "\nMédia: " + media + "\nConceito: " + nota + "\nMensagem: " + mensagem 
);