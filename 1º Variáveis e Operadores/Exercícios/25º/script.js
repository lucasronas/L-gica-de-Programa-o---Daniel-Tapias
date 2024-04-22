//Variável que guarda o raio fornecido pelo usuário.
var raio = parseFloat(prompt("Digite o raio do círculo: "));

//Perímetro e Área do Círculo, toFixed para deixa utilizar apenas 2 casas decimais no PI.
var area = Math.PI.toFixed(2) * (raio * raio);
var peri = 2 * Math.PI.toFixed(2) * raio;

//Exibindo para o usuário o perímetro e a área do cículo.
alert(
    "Informações do Círculo:\n Raio: " + raio + "\nÁrea: " + area.toFixed(2) + "\nPerímetro: " + peri.toFixed(2)
);