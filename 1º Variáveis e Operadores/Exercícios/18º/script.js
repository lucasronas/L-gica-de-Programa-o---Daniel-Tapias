//Guardando os números do primeiro e segundo jogador.
var j1 = parseFloat(prompt("Digite seu número Jogador 1: "));
var j2 = parseFloat(prompt("Digite seu número Jogador 2: "));

//Checando se não são iguais.
if (j1 === j2) {

    //Alert avisando que houve um empate.
    alert("Houve um empate!");
} else {

    //Sorteando um número entre 0 e 1.
    var numberRandom = Math.round(Math.random());
    console.log(numberRandom);

    //Checando se o número sorteado foi 0.
    if ( (numberRandom === 0 && j1 < j2) || (numberRandom === 1 && j1 > j2) ) {

        alert("Jogador 1 ganhou!");
    } else {

        alert("Jogador 2 ganhou!");
    }
}