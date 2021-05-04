// FUNZIONE PER VALUTARE SE UN NUMERO E' DISPARI
function oddCalcolator (number) {

    return number % 2 == 1

}

// VARIABILI GLOBALI
var numberList = [];
var userNumber;
var numberOdd;
var list = document.getElementById("list");

// CHIEDI 6 VOLTE ALL'UTENTE UN NUMERO E SE E' DISPARI INSERISCILO NELLA LISTA
for (i = 1; i <= 6; i++) {

    // CHIEDI IL NUMERO ALL'UTENTE
    userNumber = parseInt(prompt("Enter a number, please."));

    // SE L'UTENTE INSERISCE EFFETTIVAMENTE UN NUMERO, ALLORA VERIFICA CHE SIA DISPARI E NEL CASO INSERISCILO NELL'ARRAY
    if (!isNaN(userNumber)) {

        numberOdd = oddCalcolator (userNumber);

        if (numberOdd) {
            numberList.push(userNumber);
        }

    }
    
}

// STAMPA L'ARRAY SULL'HTML
list.innerHTML = numberList;