let nome = "Mirtilla";
nome = "Giorgia";
console.log(nome);
// con let noi possiamo andare a modificare una determinata variabile, in questo caso in console non verrà più reinderizzato Mirtilla ma verrà messo a schermo Giorgia
var utente = "cliente";
utente = "proprietario";
console.log(utente);
// var fa lo stesso lavoro di let, ma lo standard ad oggi non usa più var bensì let
const PI = 3.14;
console.log(PI);
// const invece definisce una costante, di conseguenza il valore della costante non può essere modificato. 
// se viene modificato in console ci verrà mostrato: Uncaught error!

let name = "Ilde";
console.log(name);
utente = "Stramandinoli";
console.log(utente);
console.log(name + " " + utente);
document.getElementById("container").innerHTML = name + " " + utente;
//PI = 4;
//console.log(PI);

let primoLavoro = "developing";
let secondoLavoro = "formazione";

let lavoro = primoLavoro + " e " + secondoLavoro;
document.getElementById("paragraph").innerHTML = primoLavoro + " e " + secondoLavoro;

console.log('io mi occupo di: ' + lavoro);
console.log('io mi occupo di: ' + primoLavoro + " e " + secondoLavoro);

const textBirth = "Nata nel:";
const birthDate = 1998;

const information = textBirth + " " + birthDate;
document.write(information);  
console.log(birthDate);

let currentYear = 2022;
let dateBirth = 1998;

let todayYears = currentYear - dateBirth;
console.log(todayYears);
document.getElementById("years").innerHTML = todayYears;

console.log(name + " ha: " + todayYears + " anni");

let score = 10;
score += 10;
score -= 5;
score *= 2;
score /= 3;
score **= 2;
score %= 7;
console.log(score);

let points = 5;
points++;
points++;
console.log(points++);

let point = 9;
point--;
console.log(point--);

// let ageInYears = prompt("Quanti anni hai?");
// let age = Number(ageInYears);
// let ageInSeconds = ageInYears * 365.25 * 24 * 60 * 60;
// alert(`Significa che sei stato al mondo per almeno ${ageInSeconds} secondi!!`);

// const sides = prompt(`Quante sides ha un dado?`);
// alert(`Premi Invio o clicca su OK per lanciare il dado`);
// const number = Math.ceil(sides*Math.random());
// alert(`Il risultato del lancio del dado è ${number}`);

// const age = prompt(`How old are you?`);
// alert(`In 30 years you will be ${Number(age)+30}!`);

// let energy = 10;
// if (energy > 3) {
//     alert(`Vai a dormire!`)
// } else {
//     alert(`Studia!`)
// }

let energy = prompt(`Quanta energia ti senti da 1 a 10?`);
if (energy < 6) {
    alert(`Vai a dormire`)
} else {
    alert(`Studia!`)
}















