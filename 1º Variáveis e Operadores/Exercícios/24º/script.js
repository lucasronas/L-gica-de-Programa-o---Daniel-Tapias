//Recebendo o salário do usuário para o reajuste.
var salario = parseFloat(prompt("Informe seu salário: "));

//Variável do reajuste, do aumento e do percentual.
var aumento;
var reaj;
var perce;

//Checando qual o reajuste do usuário.
if (salario > 0 && salario < 281) {

    //Reajustando salarial de 20%.
    aumento = salario * 1.20;
    reaj = salario * 0.20;
    perce = 20;

    //Mostrando o salário antes, o percentual, o aumento e o novo salário. toFixed(2) para deixa ate 2 casas decimais.
    alert(
        "Salário Atual: R$ " + salario + "\nPercentual do Aumento Aplicado: " + perce + "%\nValor do Aumento: R$ " + reaj.toFixed(2) + "\nNovo Salário: R$ " + aumento.toFixed(2)
    )

} else if (salario >= 281 && salario < 701) {

    //Reajuste salarial de 15%.
    aumento = salario * 1.15;
    reaj = salario * 0.15;
    perce = 15;

    //Mostrando o salário antes, o percentual, o aumento e o novo salário. toFixed(2) para deixa ate 2 casas decimais.
    alert(
        "Salário Atual: R$ " + salario + "\nPercentual do Aumento Aplicado: " + perce + "%\nValor do Aumento: R$ " + reaj.toFixed(2) + "\nNovo Salário: R$ " + aumento.toFixed(2)
    )

} else if (salario >= 701 && salario < 1501) {

    //Reajuste salarial de 10%.
    aumento = salario * 1.10;
    reaj = salario * 0.10;
    perce = 10;

    //Mostrando o salário antes, o percentual, o aumento e o novo salário. toFixed(2) para deixa ate 2 casas decimais.
    alert(
        "Salário Atual: R$ " + salario + "\nPercentual do Aumento Aplicado: " + perce + "%\nValor do Aumento: R$ " + reaj.toFixed(2) + "\nNovo Salário: R$ " + aumento.toFixed(2)
    )

} else if (salario >= 1501) {

    //Reajuste salarial de 5%.
    aumento = salario * 1.05;
    reaj = salario * 0.05
    perce = 5;

    //Mostrando o salário antes, o percentual, o aumento e o novo salário. toFixed(2) para deixa ate 2 casas decimais.
    alert(
        "Salário Atual: R$ " + salario + "\nPercentual do Aumento Aplicado: " + perce + "%\nValor do Aumento: R$ " + reaj.toFixed(2) + "\nNovo Salário: R$ " + aumento.toFixed(2)
    )

} 
//Caso o usuário não informe o sálario.
else {

    alert("Valor Invalido! Por favor, informe seu sálario.");
}