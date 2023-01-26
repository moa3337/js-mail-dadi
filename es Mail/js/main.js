// Chiedere all'utente la sua email, controllare che sia
// nella lista di chi può accedere, stampa un messaggio 
// in base all'esito del controllo.

// rray con le Mail della lista
let allowedNames = ["Luis@gmail.it", "vik@gmail.it", "saad@gmail.it", "yasin@gmail.it", "tony@gmail.it", "kaio@gmail.it", "bu@gmailit"];

// domanda per l'utente
let userName = prompt("Inserisci la tua Email");

// controllo nome utente nella lista 
if (allowedNames.includes(userName)) {
    // se sei nella lista:
    console.log("Accesso consentito, benvenuto " + userName);
    document.getElementById("access").innerHTML = "Accesso consentito, benvenuto " + userName;
} else {
    // se non sei nella lista:
    console.log("Accesso negato! non sei autorizzato.");
    document.getElementById("access").innerHTML = "Accesso negato! non sei autorizzato."
}
