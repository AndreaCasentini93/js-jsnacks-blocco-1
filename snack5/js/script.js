// FUNZIONE PER VALUTARE SE UN NUMERO E' DISPARI
function oddCalcolator (number) {

    return number % 2 == 1

}

// VARIABILI GLOBALI
var numberList = [];
var userNumber;
var numberOdd;

// CHIEDI 6 VOLTE ALL'UTENTE UN NUMERO E SE E' DISPARI INSERISCILO NELLA LISTA
for (i = 1; i <= 6; i++) {

    userNumber = parseInt(prompt("Enter a number, please."));

    if (!isNaN(userNumber)) {

        numberOdd = oddCalcolator (userNumber);

        if (numberOdd) {
            numberList.push(userNumber);
        }

    }
    
}

console.log(numberList);