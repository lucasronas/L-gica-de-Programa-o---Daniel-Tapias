//Guardando os três números fornecidos pelo usuário.
var n1 = parseInt(prompt("Digite o primeiro número: "));
var n2 = parseInt(prompt("Digite o segundo número: "));
var n3 = parseInt(prompt("Digite o terceiro número: "));

//Declarando o maior e o menor número sem valor.
var maior;
var menor;

//Checando qual o maior.
if (n1 > n2 && n1 > n3) {

    //Guarando o maior número.
    maior = n1;

    //Checando qual o menor.
    if (n2 < n3) {

        //Guardando o menor e mostrando para o usuário o maior e o menor.
        menor = n2;
        alert("O maior número é o " + n1 + " e o menor é o " + n2);
    } else {

        menor = n3;
        alert("O maior número é o " + n1 + " e o menor é o " + n3);
    }

} else if (n2 > n1 && n2 > n3) {

    //Guardando o maior.
    maior = n2;

    //Checando qual o menor.
    if (n1 < n3) {

        //Guardando o menor e mostrando para o usuário o maior e o menor.
        menor = n1;
        alert("O maior número é o " + n2 + " e o menor é o " + n1);
    } else {

        menor = n3
        alert("O maior número é o " + n2 + " e o menor é o " + n3);
    }

} else {

    //Guarda o maior.
    maior = n3;

    //Checando qual o menor.
    if (n1 < n2) {

        //Guardando o menor número e mostrando para o usuário o maior e o menor.
        menor = n1;
        alert("O maior número é o " + n3 + " e o menor é o " + n1);
    } else {
        
        //Guardando o menor número e mostrando para o usuário o maior e o menor.
        menor = n2;
        alert("O maior número é o " + n3 + " e o menor é o " + n2);
    }
}