//Guardando os valores do usuário.
var l1 = parseFloat(prompt("Digite o primeiro lado do triângulo: "));
var l2 = parseFloat(prompt("Digite o segundo lado do triângulo: "));
var l3 = parseFloat(prompt("Digite o terceiro lado do triângulo: "));

//Calculando os lados.
var v1 = l1 + l2;
var v2 = l1 + l3;
var v3 = l3 + l2;

//Checando se é um triângulo é se e equilátero, isósceles ou escaleno.
if (
    (v1 > l3 || v2 > l2 || v3 > l1) && (l1 == l2 && l1 == l3 && l2 == l3)
) {

    //Triângulo Equilátero
    alert("Os valores formam um triângulo equilátero!");

} else if (
    (v1 > l3 || v2 > l2 || v3 > l1) && (l1 == l2 || l1 == l3 || l2 == l3)
) {

    //Triângulo Isóceles.
    alert("Os valores formam um triângulo isósceles!");

} else if (
    (v1 > l3 || v2 > l2 || v3 > l1) && (l1 != l2 && l1 != l3 && l2 != l3)
) {

    //Triãngulo Escaleno.
    alert("Os valores formam um triângulo escaleno!");
} else {

    //Caso não seja colocado valores aceitáveis.
    alert("Valores Inválidos! Por favor, informe apenas números.");
}