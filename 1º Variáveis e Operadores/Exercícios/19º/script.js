//Guarda os três valores do usuário.
var n1 = parseInt(prompt("Digite o 1º número: "));
var n2 = parseInt(prompt("Digite o 2º número: "));
var n3 = parseInt(prompt("Digite o 3º número: "));

//Checando qual o maior número.
if (n1 > n2 && n1 > n3 ) {
    
    //Alert avisando que o primeiro número é o maior dos três.
    alert("O número " + n1 + " é o maior dos três");
} else if ( n2 > n1 && n2 > n3 ) {

    //Alert avisando que o segundo número é o maior dos três.
    alert("O número " + n2 + " é o maior dos três");
} else {

    //Alert avisando que o terceiro número é o maior dos três.
    alert("O número " + n3 + " é o maior dos três");
}