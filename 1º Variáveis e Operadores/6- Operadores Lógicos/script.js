/*
 Existem alguns tipos de operadores lógicos, que são eles:
  
  º ! Não (not);
  º && E (and);
  º || Ou (or);
 
  Que utilizamos para fazer a checagem das condicionais, if..else.
*/

//Exemplo
//Guardando as duas notas do usuário.
var n1 = parseFloat(prompt("Digite a 1º nota: "));
var n2 = parseFloat(prompt("Digite a 2º nota: "));

//Calculando a média.
var media = (n1 + n2) / 2 ;

//Checando se aprovou ou reprovou.
if (n1 > 0 && n2 > 0 && media >= 5) {

    //Alert avisando que passou.
    alert("Aprovado!");
} else {

    //Alert avisando que reprovou.
    alert("Reprovado");
}
