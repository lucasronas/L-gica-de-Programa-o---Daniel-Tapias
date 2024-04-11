//Variável que guarda o valor do usuário.
var raio = parseFloat(prompt("Digite o valor do raio: "));

//Variável da área do círculo e o comprimento da circunferência.
//Math.PI da o valor de PI que é aproximadamente 3.14159.

var area = Math.PI * (raio * raio);
var circun = 2 * Math.PI * raio;

//Alert para mostra o perímetro e área do círculo.
alert("A área do círculo é de " + area + "m².\nO perímetro do círculo é de " + circun + "m.");