// Creazione variabili
let chilometraggio = prompt("Quanti chilometri devi percorrere?");
let eta = prompt("Quanti anni hai?");
let prezzo = chilometraggio * 0.21;
let prezzoFinale = prezzo;
// check if underage
if (eta < 18) {
    prezzoFinale = prezzo * 0.8;
}
// check if over 65
if (eta > 65) {
    prezzoFinale = prezzo * 0.6;
}
prezzoFinale = prezzoFinale.toFixed(2);
console.log("Il prezzo del biglietto è di " + prezzoFinale + "€");