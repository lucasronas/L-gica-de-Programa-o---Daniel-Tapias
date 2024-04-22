//Guardando o valor do usuário.
var dinheiro = parseFloat(prompt("Quanto de dinheiro você tem?"));

//Checando se o usuário tem o suficiente para comprar pelo menos 1 litro.
if (dinheiro >= 5) {

    //Calculando quantos litro ele pode comprar e quantos kms ele faz com essa quantidade.
    var litro = dinheiro / 5;
    var km = 20 * litro;

    //Mostrando quantos litros ele consegue comprar e quantos kms ele faz com essa quantidade.
    alert(
        "Dinheiro que tem: R$" + dinheiro + "\nCombustível que pode comprar: " + litro + " L\nKilometros que percorrerá: " + km + "km"
    );
} else {
    
    //Avisando o usuário que não tem dinheiro suficiente para compra combustível.
    alert(
        "Dinheiro insuficiente para compra de combustível!\nMínimo R$5.00"
    );
}