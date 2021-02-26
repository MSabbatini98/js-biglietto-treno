var age = prompt("Inserisci la tua età: ");
var distance = prompt("Inserisci la distanza da percorrere (in Km)");

var km_price = distance * 0.21;

console.log(distance);
console.log(km_price);

if (age >= 65 ) {
    var discount = 40;
    total_price = km_price - (discount)
} else if (age < 18) {
    var discount = 20 ;
} else {
    var discount = 0;
}

// var ticket_discount = price - ticket_discount;

// document.getElementById("age").innerHTML = age;
// document.getElementById("km").innerHTML = distance;


// console.log(km_price);
// console.log(discount);
// console.log(km_price);
// console.log(km_price);



// var costo  = `La tua password sarà : ${nome}${cognome}${colore}${27}`;

// document.getElementById("anno_nascita").innerHTML = password;

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65