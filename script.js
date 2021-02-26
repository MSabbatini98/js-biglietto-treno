var age = prompt("Inserisci la tua età: ");
var distance = prompt("Inserisci la distanza da percorrere (in Km)");

var km_price = distance * 0.21;
var ticket_price;
var discount = 0;
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




ticket_price = km_price - (km_price * discount);

console.log(distance);
console.log(km_price);
console.log(discount);
console.log(ticket_price);

// var ticket_discount = price - ticket_discount;

document.getElementById("age").innerHTML = age;
document.getElementById("km").innerHTML = distance;
if (discount == 0){
    document.getElementById("discount").innerHTML = "0%";
} else {
    document.getElementById("discount").innerHTML = (discount * 100) + "%";
}
document.getElementById("price").innerHTML = ticket_price + "€";


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65