//Variável que guarda a letra digitado pelo usuário.
var letra = prompt("Digite a uma letra: ");

//Checagem se o usuário digitou um número ou letra.
if (!isNaN(letra)) {
    
    //Alert avisando que digitou um número.
    alert("Você digitou um número, por favor digite uma letra.");

} else {

    //Checando se foi digitado uma vogal ou consoante.
    if (letra === "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {

        //Alert avisando que a letra digitada é um vogal.
        alert("A letra digita é uma vogal!");
    
    } else {
    
        //Alert avisando que a letra digitada é uma consoante.
        alert("A letra digitada é uma consoante!");
    }
}
