// variabili da input
var age = prompt("Inserisci la tua età: ");
var distance = prompt("Inserisci la distanza da percorrere (in Km)");

// variabili "locali"
var km_price = distance * 0.21;
var ticket_price;
var discount = 0;
var co2;
var co2_fix;

// * Calcolo discount
// controllo input utente su distance(int) e age (int)
if ( (isNaN(distance) == false) && (distance > 0)) {
    if (age >= 0 && age < 123 ) {
        if (age >= 65 ) {
            discount = 0.4;
        } else if (age < 18) {
            discount = 0.2 ;
        } else {
            discount = 0;
        }
    } else {
        alert("Ha inserito un'età  non valida, la prego di ricaricare la pagina e riprovare")
    }
} else {
    alert("Ha inserito una distanza non valida, la prego di ricaricare la pagina e riprovare")
}

// * Calcolo prezzo biglietto
ticket_price = km_price - (km_price * discount);
if (discount == 0){
    document.getElementById("discount").innerHTML = "0%";
} else {
    document.getElementById("discount").innerHTML = (discount * 100) + "%";
}
//!!!!!!!!!!!! EXTRAS
// * Calcolo co2 emesse e co2_fix
co2 = distance * 0.065

if ((co2 >= 0) && (co2 < 1)) {
    co2_fix = "spegni la viodecamera durante le riunioni di zoom per 1 ora";
}else if ((co2 >= 1) && (co2 < 5)) {
    co2_fix = "Per 1 giorno vai a piedi invece che in auto";
}else if ((co2 >= 5) && (co2 < 10)) {
    co2_fix = "Per 3 giorni vai a piedi invece che in auto";
}else if ((co2 >= 10) && (co2 < 20)) {
    co2_fix = "evita la deforestazione piantando alberi in Uganda";
} else if ((co2 >= 20) && (co2 < 30)) {
    co2_fix = "Previeni la deforestazione con fornelli efficienti in Ghana";
} else if ((co2 >= 30) && (co2 < 40)) {
    co2_fix = "compra dei jeans usati invece che nuovi !"
}else if ((co2 >= 40) && (co2 < 50)) {
    co2_fix = "passa al solare per 1 anno"; 
}else if ((co2 >= 50) && (co2 < 60)) {
    co2_fix = "pianta un albero di Cacao con treedom !";
}else if ((co2 >= 60) && (co2 < 100)) {
    co2_fix = "evita di consumare 1.000 fogli di carta";
}else if ((co2 >= 100) && (co2 < 150)) {
    co2_fix = "tieni spento un LED alimentato da energia prodotta dal carbone";
}else if ((co2 >= 150) && (co2 < 250)) {
    co2_fix = "pianta un albero di Jackfruit in Kenya";
}else if ((co2 >= 250) && (co2 < 500)) {
    co2_fix = "pianta un albero di Leucaena in Nepal";
}else if ((co2 >= 500) && (co2 < 1000)) {
    co2_fix = "painta un albero di mango in Kenya";
}else if ((co2 >= 1250) && (co2 < 1500)) {
    co2_fix = "passa al solare per 1 anno";
}else if ((co2 >= 1500) && (co2 < 15000)) {
    co2_fix = "pianta 20 alberi con treedom !";
}else if ((co2 >= 15000) && (co2 < 400000)) {
    co2_fix = "uccidi circa 5 persone (13.000 kg all'anno a persona)";
}else if ((co2 >= 4000000) && (co2 < 5000000)) {
    co2_fix = "l'intero pianeta smette la produzione di tabacco e sigarette";
} else if ((co2 >= 5000000) && (co2 < 10000000)) {
    co2_fix = "riduci il traffico aereo del 0.01%";
} else  {
    co2_fix = "Finisci la creazione della fascia verde: bosco in africa al posto del deserto del sahara";
}

// Funzione che approssima

//! Debugging
console.log(distance);
console.log(km_price);
console.log(discount);
console.log(ticket_price);
console.log(co2);
console.log(co2_fix);

//* Stampa su file
document.getElementById("age").innerHTML = age;
document.getElementById("km").innerHTML = distance;
document.getElementById("price").innerHTML = ticket_price + "€";
document.getElementById("co2").innerHTML = co2 ;
document.getElementById("co2_fix").innerHTML = co2_fix;


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65