Ciao ragazzi,
esercizio di oggi: Biglietto del treno

cartella/repo js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Numero di push minimo: 6
Ricordatevi di spezzare il problema in sottoproblemi come visto a lezione nel file README.md

Buon lavoro!

- Creo le due variabili chilometraggio e eta' chieste all'utente tramite prompt

- Calcolo prezzo usando la formula prezzo = chilometraggio * 0.21, per 21 centesimi al chilometro.

- Creo una variabile opzionale Prezzo finale, non necessaria, ma creata e inizializzata a valore iniziale uguale al prezzo per una visione piu pulita.

- Controllo se e' minorenne tramite un if, se si, applicare lo sconto del 20% tramine x0.8

- Controllo se e' ultra 65enne tramite un if, se si, applicare lo sconto del 40% tramine x0.6

- Applico il toFixed al prezzo finale calcolato per avere un numero fisso di decimali

- Stampo il risultato su console tramite console.log