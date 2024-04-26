/*
    Para calcular a equação de segundo grau sera utilizado a Fórmula de Bhaskara.

    Fórmula de Bhaskara = (-b + Math.sqrt(delta)) / (2 * a)

    Mas para fazer a fórmula de bhaskara mais facíl precisamos encontra o delta que para isso a gente utiliza a fómula fornecida pelo enunciado, ax² + bx + c. Que com isso podemos utilizar o método de bhaskara: Delta = b² - 4ac.

    Método de bhaskara: (b ** 2) - (4 * a * c).
*/

//Guardando os valores do usuário.
var a = parseFloat(prompt("Digite o valor de 'a': "));
var b = parseFloat(prompt("Digite o valor de 'b': "));
var c = parseFloat(prompt("Digite o valor de 'c': "));


//Variáveis auxiliares.
var raiz;
var raiz2;

//Calculo da de Bhaskara.
var delta = (b ** 2) - (4 * a * c);

//Checando se tem duas, uma ou nem uma raiz real.
if (delta > 0) {
    
    //Calculando as duas raízes e mostrando o resultado
    raiz = (- b + Math.sqrt(delta)) / (2 * a);
    raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Tem duas raízes distintas\n1º Raiz: " + raiz + "\n2º Raiz: " + raiz2);
} else if (delta == 0) {

    //Calculando a sua raiz e mostrando o resultado.
    raiz = -b / (2 * a);
    alert("Tem apenas uma raiz\nRaiz: " + raiz);
} else if (delta < 0) {

    //Não tem raiz.
    alert("Não possuí nem uma raiz: " + delta);
} else {

    //Caso não seja fornecido números.
    alert("Valores Inválidos! Por favor, fornecer apenas números.");
}
