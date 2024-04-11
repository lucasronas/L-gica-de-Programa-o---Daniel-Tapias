//Variáveis que guardam os valores do jogador 1 e 2.
var j1 = parseFloat(prompt("Digite o seu número: "));
var j2 = parseFloat(prompt("Digite o seu número: "));

//Comparando os valores.
if (j1 === j2) {

    alert("Empate!");
} 
//Caso não de empate.
  else{

    //Math.random para sortea um número aleatorio entre 0 e 1 e o Math.round para redondar o valor.
    var number = Math.round(Math.random());
    
    //Caso o número sorteado for igual a zero
    if (number === 0) {

        //Comparando quem tem o menor valor para ganhar.
        if (j1 < j2) {

            alert("Jogador 1 tem o menor número!");
        } else {
            
            alert("Jogador 2 tem o menor número!");
        }
    } 
    //Caso não seja igual a zero.
      else {

        //Comparando quem tem o maior valor para ganhar.
        if (j1 > j2) {

            alert("Jogador 1 tem o maior número!");
        } else {

            alert("Jogador 2 tem o maior número!");
        }
    }
}