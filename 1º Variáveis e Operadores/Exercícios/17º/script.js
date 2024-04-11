//Guarda as duas notas do usuário.
var n1 = parseFloat(prompt("Digite a 1º nota: "));
var n2 = parseFloat(prompt("Digite a 2º nota: "));

//Calculando a média.
var media = (n1 + n2) / 2;

//Fazendo a checagem.
if (media <= 5 || n1 == 0 || n2 == 0) {

    //Alert avisando que reprovou.
    alert("Reprovou!");
} else {

    //Alert avisando que foi aprovado.
    alert("Aprovado");
}