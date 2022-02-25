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


// Snack 2


/*let parola = prompt("parola 1");
let parola2 = prompt("parola 2");
let risultato = document.getElementById("stampa")


if (parola.length > parola2.length){
    risultato.innerHTML = `${parola} <br> ${parola2}`;
} else if (parola.length < parola2.length){
    risultato.innerHTML =`${parola2} <br>> ${parola}`;
} else{
    risultato.innerHTML = `Uguali`;
}*/


// Snack 3


let arrNum = [];

for (i = 0; i < 10; i++ ){
    let userNum = parseInt(prompt("inserisci un numero"));
    arrNum.push(userNum);
}

let somma = 0;

for (i = 0; i < arrNum.length; i++ ){
    somma = somma + arrNum[i];
}

alert(somma);

// SNACK 4

// SNACK 5

// SNACK 6


