// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    nome: "Denis",
    cognome: "Paul",
    età: 22
}
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (key in studente) {
    console.log(key + ": " + studente[key]); //stampo sia la proprietà che il valore.
}

// Creare un array di oggetti di studenti.
var studenti = [
    {
        nome: "Gino",
        cognome: "Pippo",
        età: 33,
    },
    {
        nome: "San",
        cognome: "Pietrino",
        età: 43,
    },
    {
        nome: "Ermenegildo",
        cognome: "Ersumatti",
        età: 20
    }
]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome + " " + studenti[i].cognome);
}
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

do {
    var nuovo = prompt("Vuoi inserire un nuovo studente? si/no");
} while (nuovo != "si" && nuovo != "no");

if (nuovo == "si") {
    var nuovoStudente = {
        nome: prompt("Inserisci il nome dello studente:"),
        cognome: prompt("Inserisci il cognome dello studente"),
        età: parseInt(prompt("Inserisci l'età dello studente:"))
    }

    studenti.push(nuovoStudente)
}
console.log(studenti);