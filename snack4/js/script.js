// FUNZIONE PER CALCOLARE UN NUOVO NOME COMPLETO PARTENDO DA DUE LISTE
function nameSurnameCalcolator (name, surname) {

    var random;
    var nameSurname;

    random = randomNumber (0, 9);

    nameSurname = name[random] + " ";

    random = randomNumber (0, 9);
    
    nameSurname += surname[random]

    return nameSurname;

}

// FUNZIONE PER CALCOLARE UN NUMERO RANDOM COMPRESO TRA UN NUMERO MIN ED UN NUMERO MAX
function randomNumber (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

// FUNZIONE DEL PULSANTE PER CALCOLARE UNA NUOVA LISTA
function newList () {

    if (test) {
        for (i = 0; i < 10; i++) {
            falseList.push(nameSurnameCalcolator (nameList, surnameList));
            gatsbyList.innerHTML += "<li>" + nameSurnameCalcolator (nameList, surnameList) + "</li>";
        }
        test = false;
    } else {
        gatsbyList.innerHTML = "";
        for (i = 0; i < 10; i++) {
            falseList.push(nameSurnameCalcolator (nameList, surnameList));
            gatsbyList.innerHTML += "<li>" + nameSurnameCalcolator (nameList, surnameList) + "</li>";
        }
    }

}

// FUNZIONE DEL PULSANTE DI RESET
function reset () {

    if (!test) {
        gatsbyList.innerHTML = "";
        test = true;
    }

}

// VARIABILI GET ELEMENT BY ID
var gatsbyList = document.getElementById("gatsby-list");

// ARRAY
var nameList = ["Giuseppe", "Giovanni", "Antonio", "Filippo", "Mario", "Maria", "Anna", "Giulia", "Rosa", "Carmela"];

var surnameList = ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana", "Bruno", "Greco"];

var falseList = [];

var test = true;