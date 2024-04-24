//Guarda a quantidade de horas trabalhada no mês e o valor da sua hora.
var hora = parseFloat(prompt("Informe quantas horas trabalhou esse mês: "));
var valorHora = parseFloat(prompt("Informe o valor de suas horas: "));

//Variáveis auxiliares.
var ir;
var inss = 0.10;
var fgts = 0.11;
var salarioB = valorHora * hora;
var desconto;
var salarioL;
var perce;

//Checagem.
if (salarioB > 0 && salarioB <= 900) {
    
    //Calculo do ir(imposto de renda), inss, fgts(Fundo de Garantia do Tempo de Serviço), total de desconto o salário liquido.
    perce = 0;
    ir = "Isento";
    inss = salarioB * inss;
    fgts = salarioB * fgts;
    desconto = inss;
    salarioL = (salarioB - desconto).toFixed(2);
} else if (salarioB >= 901 && salarioB <= 1500) {

    //Calculo do ir(imposto de renda), inss, fgts(Fundo de Garantia do Tempo de Serviço), total de desconto o salário liquido.
    perce = 5;
    ir = salarioB * 0.05;
    inss = salarioB * inss;
    fgts = salarioB * fgts;
    desconto = ir + inss;
    salarioL = (salarioB - desconto).toFixed(2);     
} else if (salarioB >= 1501 && salarioB <= 2500) {

    //Calculo do ir(imposto de renda), inss, fgts(Fundo de Garantia do Tempo de Serviço), total de desconto o salário liquido.
    perce = 10;
    ir = salarioB * 0.10;
    inss = salarioB * inss;
    fgts = salarioB * fgts;
    desconto = ir + inss;
    salarioL = (salarioB - desconto).toFixed(2);
} else if (salarioB >= 2501) {

    //Calculo do ir(imposto de renda), inss, fgts(Fundo de Garantia do Tempo de Serviço), total de desconto o salário liquido.
    perce = 20
    ir = salarioB * 0.20;
    inss = salarioB * inss;
    fgts = salarioB * fgts;
    desconto = ir + inss;
    salarioL = (salarioB - desconto).toFixed(2);
} else {

    //Avisando o usuário que forneceu valores errados.
    alert("Valor invalido! Por favor, forneça sua horas de tabalho e quantas foram.");
}

//Mostrando o resultado.
alert(
    "Informações do Sálario:\nSalário Bruto: R$" + salarioB.toFixed(2) + "\nIR (" + perce + "%): R$" + ir + "\nINSS (10%): R$" + inss.toFixed(2) + "\nFGTS (11%): R$" + fgts.toFixed(2) + "\nTotal de Desconto: R$" + desconto.toFixed(2) + "\nSalário Liquido: R$" + salarioL
)