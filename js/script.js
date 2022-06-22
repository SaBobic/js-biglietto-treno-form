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

*/

// 1. Dichiarare le variabili da "conoscere" sin dall'inizio
let pricePerKm = 0.21;
let calculateButton = document.getElementById('calculate');
let resetButton = document.getElementById('reset');
let nameInput;
let kmsInput;
let ageInput;

// 2. Registrare al click gli input nome e cognome, km da percorrere e fascia d'età
calculateButton.addEventListener('click', function(){
    nameInput = document.getElementById('name');
    name = nameInput.value;
    console.log("L'utente si chiama " + name);
    
    kmsInput = document.getElementById('kms');
    kms = parseInt(kmsInput.value);
    console.log("L'utente deve percorrere " + kms + " chilometri");

    ageInput = document.getElementById('age');
    age = ageInput.value;
    console.log("L'utente è " + age);
})

// 3. Settare il pulsante "reset"
resetButton.addEventListener('click', function(){
    nameInput.value = "";
    kmsInput.value = "";
    ageInput.value = "";
})