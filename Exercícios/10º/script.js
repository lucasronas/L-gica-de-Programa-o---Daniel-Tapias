//Variáveis que guardam os valores do usuário.
var base = parseFloat(prompt("Digite o valor da base: "));
var altura = parseFloat(prompt("Digite o valor da altura: "));

//Calculo da área e do perímetro do retângulo.
var area = base * altura;
var peri = 2 * (base + altura);

//Mostrando a área e o perímetro do retângulo
alert("A área do retângulo é de: " + area + "cm².\nO seu perímetro é de: " + peri + "cm.")