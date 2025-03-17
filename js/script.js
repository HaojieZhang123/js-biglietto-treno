// Creazione variabili
let chilometraggio = prompt("Quanti chilometri devi percorrere?");
let eta = prompt("Quanti anni hai?");
let prezzo = chilometraggio * 0.21;
let prezzoFinale = prezzo;
// check if underage
if (eta < 18) {
    prezzoFinale = prezzo * 0.8;
}