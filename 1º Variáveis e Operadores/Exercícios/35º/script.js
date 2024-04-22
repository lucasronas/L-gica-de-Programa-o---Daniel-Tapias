//Guardando o valor do usuário.
var dia = prompt("Em que turno você estuda? (M-matutino, V-Vespertino ou N- Noturno)");

//Fazendo as escolhas.
switch (dia) {

    //Caso seja M.
    case ("m"):
    case ("M"):
        //Exibindo mensagem.
        alert("Bom Dia!");
        break;
    
    //Caso seja V.
    case ("v"):
    case ("V"):
        //Exibindo mensagem.
        alert("Boa Tarde!");
        break;
    
    //Caso seja N.
    case ("n"):
    case ("N"):
        //Exibindo mensagem.
        alert("Boa Noite!");
        break;
    
    default:
        //Avisando que foi colocado valor inválido.
        alert("Valor Inválido! Por favor, insira M, V ou N.");
}