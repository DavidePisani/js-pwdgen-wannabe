// Chiedere all'utente nome cognome e colore preferito per creare password

// nome utente
const userName = prompt('Dimmi il tuo nome');
    console.log(userName)

// Cognome utente

const userSurname = prompt('Dimmi il tuo Cognome');
    console.log(userSurname)

// colore preferito utente

const userColor = prompt('Dimmi il tuo colore preferito');
    console.log(userColor)

// Creazione password utente

const userMessage = userName + userSurname + userColor + 21;
console.log(userMessage)

// Stampo password

document.getElementById('result').innerHTML = userMessage