// SNACK 1


/*const num1 = parseInt(prompt("numero 1"));
const num2 = parseInt(prompt("numero 2"));

if (num1 > num2){
    alert(num1)
} else if (num1 < num2){
    alert(num2)
} else{
    alert("sono uguali")
}*/


// SNACK 2


/*let parola = prompt("parola 1");
let parola2 = prompt("parola 2");
let risultato = document.getElementById("stampa")


if (parola.length > parola2.length){
    risultato.innerHTML = `${parola} <br> ${parola2}`;
} else if (parola.length < parola2.length){
    risultato.innerHTML =`${parola2} <br> ${parola}`;
} else{
    risultato.innerHTML = `Uguali`;
}*/


// SNACK 3


/*let arrNum = [];
let risultato = document.getElementById("stampa");

for (i = 0; i < 10; i++ ){
    let userNum = parseInt(prompt("inserisci un numero"));
    arrNum.push(userNum);
}

let somma = 0;

for (i = 0; i < arrNum.length; i++ ){
    somma = somma + arrNum[i];
}

risultato.innerHTML = `La somma è: ${somma}`*/


// SNACK 4


/*const nome = prompt("Salve, qual è il suo nome?");
const nomiInvitati = ["Giovanni", "Jessica", "Mauro", "Gabriel", "Nicoleta"];

let presente = false;
let risultato = document.getElementById("stampa");

for (let index = 0; index < nomiInvitati.length; index++){
    if (nomiInvitati[index] == nome){
        presente = true;
    }
}

if (presente){
    risultato.innerHTML = `Benvenuto/a, ${nome}!`;
} else{
    risultato.innerHTML = `Spiacenti, il suo nome non è nella lista, ${nome}`;
}*/


// SNACK 5


/*let arrNum = [];

for (i = 0; i < 6; i++ ){
    let userNum = parseInt(prompt("inserisci un numero"));

    if (userNum % 2 == 1){
        arrNum.push(userNum)
        console.log(arrNum)
    } 
}*/


// SNACK 6


let somma = 0;
let risultato = document.getElementById("stampa");

let userNumber = parseInt(prompt("inserisci un numero a quattro cifre"));
userNumber = userNumber.toString();

for( let currentNumber = 0; currentNumber < userNumber.length; currentNumber++){
    risultato.innerHTML = ` La somma è: ${somma += parseInt(userNumber[currentNumber])}`;
}

