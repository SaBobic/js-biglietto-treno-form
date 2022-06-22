/*

Il programma dovrà mostrare un form da compilare con cui chiedere:
- il numero di chilometri che vuole percorrere
- l'età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- 0.21 € al km
- sconto del 20% per i minorenni
- sconto del 40% per gli over 65
Il recap dei dati e l'output del prezzo finale va stampato in pagina formattato con massimo due decimali.

1. Dichiarare le variabili da "conoscere" sin dall'inizio
2. Registrare al click gli input nome e cognome, km da percorrere e fascia d'età
3. Settare il pulsante "reset"
4. Stampare su schermo il riepilogo dati
5. Aggiungere la validazione

*/

// 1. Dichiarare le variabili da "conoscere" sin dall'inizio
let pricePerKm = 0.21;
const offerMinor = 0.8;
const offerOver65= 0.6;
let calculateButton = document.getElementById('calculate');
let resetButton = document.getElementById('reset');

// 2. Registrare al click gli input nome e cognome, km da percorrere e fascia d'età
// 4. Stampare su schermo il riepilogo dati
calculateButton.addEventListener('click', function(){
    // Selezione più stampa nome passeggero
    let nameInput = document.getElementById('name');
    let passenger = document.getElementById('passenger');
    let name = nameInput.value;
    console.log("nome: " + name);
    passenger.innerText = name;

    // Selezione più stampa chilometri
    let kmsInput = document.getElementById('kms');
    kms = parseInt(kmsInput.value);
    console.log("chilometri: " + kms);

    // Selezione più stampa tariffa in base all'età
    let ageInput = document.getElementById('age');
    let offer = document.getElementById('offer');
    let age = ageInput.options[ageInput.selectedIndex].value;
    console.log("età: " + age);

    let offerMessage = "Tariffa Standard";

    if (age === "minorenne") offerMessage = "Tariffa Minorenni";
    if (age === "over-65") offerMessage = "Tariffa Over 65";
    
    offer.innerText = offerMessage;

    // Selezione più stampa costo biglietto in base alla tariffa
    let price = pricePerKm * kms;
    console.log("Prezzo pieno: " + price);

    if (age === "minorenne") price *= offerMinor;
    if (age === "over-65") price *= offerOver65;

    let finalPrice = document.getElementById('final-price');
    finalPrice.innerText = price.toFixed(2) + "€";

    // Selezione più stampa numero cabina
    const cabMin = 1;
    const cabMax = 9;
    const cab = document.getElementById('cab');
    cab.innerText = Math.floor(Math.random() * (cabMax + 1 - cabMin)) + cabMin;

    // Selezione più stampa codice CP
    const cpMin = 10000;
    const cpMax = 20000;
    const cpCode = document.getElementById('cp-code');
    cpCode.innerText = Math.floor(Math.random() * (cpMax + 1 - cpMin)) + cpMin;
})

// 3. Settare il pulsante "reset"