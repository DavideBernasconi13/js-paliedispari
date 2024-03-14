//prendo i due bottoni e faccio eseguire la funzione corrispondente
let btnPalindroma = document.querySelector('.btn');
btnPalindroma.addEventListener('click', function () {
    palindroma();
})

// bottone pari
let btnPari = document.getElementById('pari');
btnPari.addEventListener('click', function () {

})

// Consegna palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindroma() {
    //creare variabile con parola inserita dall'utente
    let userWord = prompt('Inserisci una parola');
    console.log(userWord);
    let pali = false;

    //creare array composto dalle lettere della parola inserita
    let splitString = userWord.split("");
    console.log(splitString);
    // ordinare le lettere al contrario, trasformarle in una stringa e salvare in una nuova variabile
    let newWord = splitString.reverse().join("");
    console.log(newWord);
    // confrontare le due parole(===) e restituire un valore
    if (userWord === newWord) {
        pali = true;
    }

    // variabile flag confrontata
    if (pali) {
        document.write(`La parola inserita: ${userWord} è palindroma`);
    } else {
        document.write(`La parola inserita: ${userWord} non è palindroma`);
    }
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.