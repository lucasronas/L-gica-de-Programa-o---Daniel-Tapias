//Guardando os valores do usuário.
var a = parseFloat(prompt("Digite o valor de a: "));
var b = parseFloat(prompt("Digite o valor de b: "));
var c = parseFloat(prompt("Digite o valor de c: "));

//Calculando a raiz
var bhas = (b ** 2) - (4 * a * c);

//Checando se tem duas, apenas uma ou nem uma raiz.
if (bhas > 0) {

    //Duas raízes.
    alert("Possui duas raízes!");
} else if (bhas == 0) {

    //Um raiz.
    alert("Possui apenas uma raiz!");
} else if (bhas < 0) {

    //Não tem raiz.
    alert("Não possui raiz!");
} else {

    //Caso os valores sejam invalidos.
    alert("Valores Inválidos! Por favor, informe apenas números.");
}