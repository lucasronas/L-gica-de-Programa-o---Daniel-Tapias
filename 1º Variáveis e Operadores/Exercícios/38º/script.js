//Guarda valor do usuário.
var dia = parseInt(prompt("Digite entre 1 a 7, para saber qual o dia da semana: "));

//Mensagem baseado no númereo digitado.
switch (dia) {

    //Domingo.
    case (1):
        alert("Hoje é domingo!");
        break;
    
    //Segunda.
    case (2):
        alert("Hoje é segunda!");
        break;
    
    //Terça.
    case (3):
        alert("Hoje é terça!");
        break;

    //Quarta.
    case (4):
        alert("Hoje é quarta!");
        break;

    //Quinta.
    case (5):
        alert("Hoje é quinta!");
        break;

    //Sexta.
    case (6):
        alert("Hoje é sexta!");
        break;

    //Sábado.
    case (7):
        alert("Hoje é sábado!");
        break;

    //Caso não seja digitado nem um dos valores acima.
    default:
        alert("Valor Invalido! Por favor, digitar um número entre 1 a 7.");
}