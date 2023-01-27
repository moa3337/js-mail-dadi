// PROGRAMMA PER SIMULARE IL GIOCO DEI DADI, GENERANDO
// UN NUMERO RANDOMICO DA 1 A 6 PER L'UTENTE E PER IL
// COMPUTER, IL NUMERO PIù ALTO VINCE!

// funzione per il gioco dei dadi
//for(let i =0; i < 6; i++){
function diceGame() {

    // genera un numero random tra 1 e 6 per il player
    let player = Math.floor(Math.random() * 6) + 1;
    console.log("Hai Fatto un " + player);
    document.getElementById("player").innerHTML = "Hai Fatto un " + player;

    // genera un numero random tra 1 e 6 per il computer
    let computer = Math.floor(Math.random() * 6) + 1;
    console.log("Il Computer ha fatto un " + computer);
    document.getElementById("computer").innerHTML = "Il Computer ha fatto un " + computer;

    // genera un vincitore
    if (player > computer) {
        console.log("Hai Vinto!");
        document.getElementById("winner").innerHTML = "Hai Vinto!";
    } else if (player < computer) {
        console.log("Hai Perso!");
        document.getElementById("winner").innerHTML = "Hai Perso!";
    } else {
        console.log("Pareggio!");
        document.getElementById("winner").innerHTML = "Pareggio!";
    }
}

// recupero del bottone
let button = document.getElementById("gioca");

// funzione diceGame all'evento click
button.addEventListener("click", diceGame);
