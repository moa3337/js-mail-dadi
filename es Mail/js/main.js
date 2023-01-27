// Chiedere all'utente la sua email, controllare che sia
// nella lista di chi può accedere, stampa un messaggio 
// in base all'esito del controllo.

// array con le Mail della lista
let emails = ["Luis@gmail.it", "vik@gmail.it", "saad@gmail.it", "yasin@gmail.it", "tony@gmail.it", "kaio@gmail.it", "bu@gmailit"];

// domanda per l'utente
const userEmail = prompt("inserici email");

let allowLogin = false;

// ciclo
for (let i = 0; i < emails.length; i++) {
    const currentEmail = emails[i];
    
    // controllo nome utente nella lista
    if (currentEmail == userEmail) {
        allowLogin = true;
    }
}

console.log(allowLogin);

// se sei nella lista:
if (allowLogin) {
    console.log("Accesso consentito, benvenuto " + userEmail);
    document.getElementById("access").innerHTML = "Accesso consentito, benvenuto " + userName;

    // se non sei nella lista:
} else {
    console.log("Accesso negato! non sei autorizzato.");
    document.getElementById("access").innerHTML = "Accesso negato! non sei autorizzato."
}

// *** -METODO ALTERNATIVO- ***

// domanda per l'utente
//let userName = prompt("Inserisci la tua Email");

// controllo nome utente nella lista
//if (emails.includes(userName)) {
    // se sei nella lista:
    //console.log("Accesso consentito, benvenuto " + userName);
    //document.getElementById("access").innerHTML = "Accesso consentito, benvenuto " + userName;
//} else {
    // se non sei nella lista:
    //console.log("Accesso negato! non sei autorizzato.");
    //document.getElementById("access").innerHTML = "Accesso negato! non sei autorizzato."
//}