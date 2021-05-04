/*
Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.
*/

// FUNZIONE PER CALCOLARE UN NUOVO NOME PARTENDO DA DUE LISTE
function nameSurnameCalcolator (name, surname) {

    var random;
    var nameSurname;

    random = randomNumber (0, 9);

    nameSurname = name[random] + " ";

    random = randomNumber (0, 9);
    
    nameSurname += surname[random]

    return nameSurname;

}

// FUNZIONE PER CALCOLARE UN NUMERO RANDOM COMPRESO TRA MIN E MAX
function randomNumber (min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

// FUNZIONE DEL PULSANTE PER CALCOLARE UNA NUOVA (FALSA) LISTA
function newList () {

    for (i = 0; i < 10; i++) {
        falseList.push(nameSurnameCalcolator (nameList, surnameList));
        gatsbyList.innerHTML += "<li>" + nameSurnameCalcolator (nameList, surnameList) + "</li>";
    }

}

// VARIABILI GET ELEMENT BY ID
var gatsbyList = document.getElementById("gatsby-list");

// ARRAY
var nameList = ["Giuseppe", "Giovanni", "Antonio", "Filippo", "Mario", "Maria", "Anna", "Giulia", "Rosa", "Carmela"];

var surnameList = ["Rossi", "Ferrari", "Russo", "Bianchi", "Romano", "Gallo", "Costa", "Fontana", "Bruno", "Greco"];

var falseList = [];