//Solicita ao usuário que insira o turno me que estuda
var l = prompt("Você estuda em que turno? (M-Matutino, V-Vespertino e N-Noturno");

//Switch para retorna pro usuário a mensagem do dia.
switch (l) {

    //Caso seja Matutino.
    case ("m"):
    case ("M"):
        alert("Bom Dia!");
        break;

    //Caso seja de Vespertino.
    case ("v"):
    case ("V"):
        alert("Boa Tarde!");
        break;

    //Caso seja Noturno.
    case ("n"):
    case ("N"):
        alert("Boa Noite!");
        break;
    
    //Caso seja nem um dos valores dos cases.
    default:
        alert("Valor Inválido! Por favor, insira M, V ou N.");
}