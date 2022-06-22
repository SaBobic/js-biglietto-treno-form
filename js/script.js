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
    let nameInput = document.getElementById('name');
    let passenger = document.getElementById('passenger');
    let name = nameInput.value;
    console.log("nome: " + name);
    passenger.innerText = name;

    
    let kmsInput = document.getElementById('kms');
    kms = parseInt(kmsInput.value);
    console.log("chilometri: " + kms);


    let ageInput = document.getElementById('age');
    let offer = document.getElementById('offer');
    let age = ageInput.options[ageInput.selectedIndex].value;
    console.log("età: " + age);

    if (age === "minorenne"){
        offer.innerText = "Tariffa Minorenni";
    } else if (age === "over-65"){
        offer.innerText = "Tariffa Over 65";
    } else {
        offer.innerText = "Tariffa Standard";
    }


    let price = pricePerKm * kms;
    console.log("Prezzo pieno: " + price);



    let finalPrice = document.getElementById('final-price');
    finalPrice.innerText = price.toFixed(2) + "€";
})

// 3. Settare il pulsante "reset"