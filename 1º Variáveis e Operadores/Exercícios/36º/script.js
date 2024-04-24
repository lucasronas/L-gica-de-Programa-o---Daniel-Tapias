//Guardando o valor do usuário.
var salario = parseFloat(prompt("Digite seu salário: "));

//Varipaveis auxiliares.
var aumento;
var perce;
var novoSalario;

//Checando qual percentual de aumento aplicado no salário do usuário.
if (salario > 0 && salario <= 280) {

    //Aumento percentual do salário, valor aumentado e o novo salário.
    novoSalario = (salario * 1.20).toFixed(2);
    perce = 20;
    aumento = (novoSalario - salario).toFixed(2);
} else if (salario >= 281 && salario <= 700) {

    //Aumento percentual do salário, valor aumentado e o novo salário.
    novoSalario = (salario * 1.15).toFixed(2);
    perce = 15;
    aumento = (novoSalario - salario).toFixed(2);
} else if (salario >= 701 && salario <= 1500) {

    //Aumento percentual do salário, valor aumentado e o novo salário.
    novoSalario = (salario * 1.10).toFixed(2);
    perce = 10;
    aumento = (novoSalario - salario).toFixed(2);
} else if (salario >= 1501) {

    //Aumento percentual do salário, valor aumentado e o novo salário.
    novoSalario = (salario *1.05).toFixed(2);
    perce = 5;
    aumento = (novoSalario - salario).toFixed(2);
} else {

    //Caso o usuário não informe um salário ou o salário seja menor que 0 (zero).
    alert(
        "Valor invalido! Por favor, informe um valor de sálario maior que 0."
    );
}

//Mostrando o salário antigo, o percentual que foi aplicado, o aumento que recebera e o novo salário.
alert(
    "Informações do Salário:\nSalário antes do reajuste: R$" + salario + "\nPercentual de aumento aplicado: " + perce + "%\nValor do aumento: R$" + aumento + "\nNovo salário: R$" + novoSalario
);