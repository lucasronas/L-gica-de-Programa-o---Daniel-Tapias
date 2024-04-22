//Guardando a letra fornecida pelo usuário.
var letra = prompt("Digite uma letra: ");

//Checando se é letra ou número.
if (isNaN(letra)) {

    //Checando se é uma vogal ou consoante.
    if (
        letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U"
    ) {
       
        //Exibindo para o usuário.
        alert("A letra digita é uma vogal!");
    }

    else {

        //Exibindo para o usuário.
        alert("A letra digita é uma consoante!");
    }

} else {

    //Avisando o usuário que o valor fornecido não é uma letra.
    alert("Erro! Por favor forneça uma letra.");
}