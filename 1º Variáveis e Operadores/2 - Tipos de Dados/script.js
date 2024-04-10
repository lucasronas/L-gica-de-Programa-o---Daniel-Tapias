/*
 Lógica de Programação é uma sequencia de passos a serem seguidos/executados em ordem capaz de resolver um problema especifico.

 Variável é um local onde a gente pode guarda um valor/informação, onde podemos depois chamar essa variável através de um nome predeterminado para que possa acessar o seu valor.

 Existe alguns tipos de dados que podem ser armazenadas na variável, como:
    -String: Texto;
    -Number: Número que pode ser inteiro ou real;
    -Boolean: True ou Falso;
    -null: Valor nulo ou "vazio";
    -undefined: Quando a variável não tem um valor atribuido a ela;
    -NaN: "Não é um Número".
*/

// Exemplo Variável com String.
var nome = prompt("Qual seu nome? ");
alert("Bem-Vindo, " + nome);


//Varíavel com Number.
var number = prompt("Digite o valor: ");
alert("Valor digitado foi: " + number);


/*
 Variável com Boolean.

 O console.log() serve para exibir uma mensagem no console do navegador, NÃO É PARA USAR EM PÁGINAS WEB EM PRODUÇÃO.
*/
var verdade = true;
var falso = false;
console.log(verdade);
console.log(falso);


//Variável com null.
var nulo = null;
console.log(nulo);


//Variável undefined.
var naoDefinido;
console.log(naoDefinido);


/*
 Variável NaN.

 Para ver se a variável não é um NaN utiliza o método "Number.isNaN()" que ira retorna um "true" se for um NaN ou "false" se não for um NaN.
*/
var number1 = 1;
var texto = "ola";
var noNumber = number1 + texto;
Number.isNaN(noNumber);