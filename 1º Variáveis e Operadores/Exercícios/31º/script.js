//Guardando os três número fornecidos.
var n1 = parseFloat(prompt("Digite o primeiro número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));
var n3 = parseFloat(prompt("Digite o terceiro número: "));

//Checando qual o maior.
if (n1 > n2 && n1 > n3) {

    //Exibindo o maior.
    alert("Maior número foi o primeiro: " + n1);
} else if (n2 > n1 && n2 > n3) {

    //Exibindo o maior.
    alert("Maior número foi o segundo: " + n2);
} else {

    //Exibindo o maior.
    alert("Maior número foi o terceiro: " + n3);
}