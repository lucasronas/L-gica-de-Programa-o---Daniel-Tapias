//Variável que guarda o valor do usuário.
var raio = parseFloat(prompt("Digite o raio do cículo: "));

//Variável da área do círculo é o comprimento da circunferência.
var area = Math.PI * (raio * raio);
var comprimento = 2 * Math.PI * raio;

//Alert mostrando o perímetro e área do círculo.
alert("O comprimento da circuferência é " + comprimento + ".\nA área do círculo é " + area);