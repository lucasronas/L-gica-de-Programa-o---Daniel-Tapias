/*
 Switch..Case também é um condicional onde podemos ter varios blocos de código que podem ser executados onde o usuário escolhe qual deles sera executado, com base no valor fornecido pelo usuário. Caso o valor fornecido por ele não atenda a nem um "case", sera executado o bloco do "default". Utiliza o "break" dentro do "case" caso queira que o usuário saia do "switch", podendo continuar o programa ou termina-lo.

 O switch compara o valor fornecido e o tipo do valor, como se fosse um if utilizando o operador de igualdade (===);

            switch (valor) {
                case valo1:
                    bloco de código;
                    break;
                
                case valor2:
                    bloco de código;
                    break;
                
                case valor3:
                    bloco de código;
                    break;

                default:
                    bloco de código que executa caso o valor não atenda nem um case.;
            }
*/

//Exemplo
var n = parseFloat(prompt("Digite um número de 1 a 6: "));

switch (n) {

    case 1:
        alert("Bom dia!");
        break;
    
    case 2:
        alert("Boa tarde!");
        break;

    case 3:
        alert("Boa noite!");
        break;

    case 4:
        alert("Boa madrugada!");
        break;
    
    case 5:
        alert("Acorda vagabundo!");
        break;

    case 6:
        alert("Hora de toma café da manhã!");
        break;

    default:
        alert("Você não forneceu o número de 1 a 6!");
}

//Exemplo dois. Pode ser coloca () no valor do case.
var nome = prompt("Digite o seu primeiro nome: ");
var comprimento = nome.length;

switch (comprimento) {

    case (1):
        alert("Oi");
        break;
    
    case (2):
        alert("Ola");
        break;

    case (3):
        alert("Tchau");
        break;

    default:
        alert("Não deu");
}

//Exemplo três. Mostrando que o switch faz comparação de igualdade de valor e tipo de dado.
var numero = prompt("Digite um número: ");

switch (typeof numero) {

    case "number":
        alert("É um number");
        break;
    
    case "string":
        alert("É uma string");
        break;
}