//Guardando os valores do usuário.
var l1 = parseFloat(prompt("Digite o primeiro lado do triângulo: "));
var l2 = parseFloat(prompt("Digite o segundo lado do triângulo: "));
var l3 = parseFloat(prompt("Digite o terceiro lado do triângulo: "));

//Calculos.
var v1 = l2 + l3;
var v2 = l1 + l3;
var v3 = l1 + l2;

//Checando qual o tipo de triângulo ou se não forma um triângulo.
if (
    (v1 > l1 || v2 > l2 || v3 > l3) && (l1 == l2 && l1 == l3 && l2 == l3)
) {

   //Triângulo Equilátero.
    alert("É um triângulo equilátero!");

} else if (
    (v1 > l1 || v2 > l2 || v3 > l3) && (l1 == l2 || l1 == l3 || l2 == l3)
) {

    //Triãngulo Isóceles.
    alert("É um triângulo isóceles!");

} else if (
    (v1 > l1 || v2 > l2 || v3 > l3) && (l1 != l2 && l1 != l3 && l2 != l3)
) {

    //Triângulo Escaleno.
    alert("É um triângulo escaleno!");

} else {
    
    //Não é um triângulo
    alert("Os valores fornecidos não forma um triângulo!")
}