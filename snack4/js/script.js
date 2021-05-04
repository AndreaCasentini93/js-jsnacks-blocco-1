// FUNZIONE PER CALCOLARE UN NUMERO RANDOM COMPRESO TRA UN NUMERO MIN ED UN NUMERO MAX
function randomNumber (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

// FUNZIONE PER CALCOLARE UN NUOVO NOME COMPLETO PARTENDO DA DUE LISTE COMPOSTE DA 10 ELEMENTI L'UNA
function nameSurnameCalcolator (name, surname) {

    var random;
    var nameSurname;

    // ESTRAI DALL'ARRAY NAME UN ELEMENTO DI NUMERAZIONE RANDOM COMPRESA TRA 0 E 9
    random = randomNumber (0, 9);
    nameSurname = name[random] + " ";

    // ESTRAI DALL'ARRAY SURNAME UN ELEMENTO DI NUMERAZIONE RANDOM COMPRESA TRA 0 E 9 E CONCATENALO CON L'ELEMENTO OTTENUTO PRIMA
    random = randomNumber (0, 9);
    nameSurname += surname[random]

    return nameSurname;

}

// FUNZIONE DEL PULSANTE PER CALCOLARE UNA NUOVA LISTA
function newList () {

    if (test) {
        for (i = 0; i < 10; i++) {
            // AGGIUNGI ALL'ARRAY VUOTO L'ELEMENTO OTTENUTO
            falseList.push(nameSurnameCalcolator (nameList, surnameList));
            // STAMPA SU HTML LA LISTA PRESENTE NELL'ARRAY
            gatsbyList.innerHTML += "<li>" + nameSurnameCalcolator (nameList, surnameList) + "</li>";
        }
        //PULSANTE DISATTIVATO
        test = false;
    } else {
        // SVUOTA LA LISTA PRESENTE NELL'HTML
        gatsbyList.innerHTML = "";
        for (i = 0; i < 10; i++) {
            // AGGIUNGI ALL'ARRAY VUOTO L'ELEMENTO OTTENUTO
            falseList.push(nameSurnameCalcolator (nameList, surnameList));
            // STAMPA SU HTML LA LISTA PRESENTE NELL'ARRAY
            gatsbyList.innerHTML += "<li>" + nameSurnameCalcolator (nameList, surnameList) + "</li>";
        }
    }

}

// FUNZIONE DEL PULSANTE DI RESET
function reset () {

    if (!test) {
        // SVUOTA LA LISTA PRESENTE NELL'HTML
        gatsbyList.innerHTML = "";
        // PULSANTE ATTIVATO
        test = true;
    }

}

// VARIABILI GET ELEMENT BY ID
var gatsbyList = document.getElementById("gatsby-list");

// ARRAY
var nameList = ["Giuseppe", "Giovanni", "Antonio", "Filippo", "Mario", "Maria", "Anna", "Giulia", "Rosa", "Carmela"];
var surnameList = ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana", "Bruno", "Greco"];
var falseList = [];

// PULSANTE ATTIVATO
var test = true;