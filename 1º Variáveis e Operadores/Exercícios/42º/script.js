//Guardando o valor do usuário.
var ano = parseFloat(prompt("Digite um ano qualquer: "));

//Checando se o ano e bissexto ou não.
if (
    (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)
) {
    
    //Informando que é ano bissexto
    alert("O ano informado é bissexto!");
} else {

    //Informando que não é ano bissexto.
    alert("O ano informado não é bissexto!");
}