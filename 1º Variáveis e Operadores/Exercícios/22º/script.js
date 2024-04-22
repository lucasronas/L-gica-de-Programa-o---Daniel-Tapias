//Guardando os três número do usuário.
var n1 = parseFloat(prompt("Digite o primero número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));
var n3 = parseFloat(prompt("Digite o terceiro núemro: "));


//Colocando os número em ordem crescente.
if (n1 < n2 && n1 < n3) {

    if (n2 < n3) {

        //Mostrando a ordem crescente.
        alert(
            "Núemros fornecidos: " + n1 + ", " + n2 + ", " + n3 + "\nOrdem Crescente: " + 
            n1 + ", " + n2 + ", " + n3
        );
    } else {

        //Mostrando a ordem crescente.
        alert(
            "Núemros fornecidos: " + n1 + ", " + n2 + ", " + n3 + "\nOrdem Crescente: " + 
            n1 + ", " + n3 + ", " + n2
        );

    }
} else if (n2 < n1 && n2 < n3) {

    if (n1 < n3) {

        //Mostrando a ordem crescente.
        alert(
            "Núemros fornecidos: " + n1 + ", " + n2 + ", " + n3 + "\nOrdem Crescente: " + 
            n2 + ", " + n1 + ", " + n3
        );
    } else {

        //Mostrando a ordem crescente.
        alert(
            "Núemros fornecidos: " + n1 + ", " + n2 + ", " + n3 + "\nOrdem Crescente: " + 
            n2 + ", " + n3 + ", " + n1
        );
    }
} else {

    if (n1 < n2) {

        //Mostrando a ordem crescente.
        alert(
            "Núemros fornecidos: " + n1 + ", " + n2 + ", " + n3 + "\nOrdem Crescente: " + 
            n3 + ", " + n1 + ", " + n2
        );
    } else {

        //Mostrando a ordem crescente.
        alert(
            "Núemros fornecidos: " + n1 + ", " + n2 + ", " + n3 + "\nOrdem Crescente: " + 
            n3 + ", " + n2 + ", " + n1
        );
    }
}