var etaUtente = prompt ('Inserire eta in anni');
// console.log(etaUtente);
// document.getElementById('etaUtente').innerHTML = etaUtente;
var kmUtente = prompt ('Inserire km da percorrere');
// console.log(kmUtente);
// document.getElementById('kmUtente').innerHTML = kmUtente;

// il prezzo del biglietto dipende dalla distanza da percorrere e costa € 0.21 / km
// -è previsto uno sconto del 20% per il minorenni
// -gli over 65 hanno diritto ad uno sconto del 40%

var prezzo = kmUtente * 0.21;

if (etaUtente <= 18) {
prezzo = prezzo - (prezzo/100 * 20);
document.getElementById('sconto').innerHTML = "hai diritto a uno sconto del 20%:" + prezzo + '€';
} else if (etaUtente >= 65) {
prezzo = prezzo - (prezzo/100 *40);
document.getElementById('sconto').innerHTML ="hai diritto a uno sconto del 40%:" + prezzo + '€';
} else {
prezzo;
document.getElementById('sconto').innerHTML = "il prezzo del tuo biglietto è:" + prezzo + '€';
}
