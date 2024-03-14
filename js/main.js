// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//creare variabile con parola inserita dall'utente
let userWord = prompt('Inserisci una parola');
console.log(userWord);
let pali = false;


function palindroma() {
    console.log("crash");
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
    if (pali) {
        document.write('La parola inserita è palindroma');
    } else {
        document.write('La parola inserita non è palindroma');
    }
}



//passare alla funzione come parametro la parola dell'utente
palindroma(userWord);

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.