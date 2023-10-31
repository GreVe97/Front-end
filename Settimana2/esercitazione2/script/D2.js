/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let numeroIntero1=false; 
let numeroIntero2=false;
let num1;
let num2;
while (!numeroIntero1){
  num1=Number(prompt("Inserisci il primo numero Intero"));
  if(num1==parseInt(num1)){
    numeroIntero1=true    
  }
  else{
    alert("Input non valido! Devi inserire un numero intero!!")
  }
 }
 while (!numeroIntero2){
  num2=Number(prompt("Inserisci il secondo numero Intero"));
  if(num2==parseInt(num2)){
    numeroIntero2=true    
  }
  else{
    alert("Input non valido! Devi inserire un numero intero!!")
  }
 }
let a=(num1>num2)?num1:num2;

alert("il numero più grande è "+a)



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let numeroIntero1;
let num1;
while (!numeroIntero1){
  num1=Number(prompt("Inserisci un numero Intero"));
  if(num1==parseInt(num1)){
    numeroIntero1=true    
  }
  else{
    alert("Input non valido! Devi inserire un numero intero!!")
  }
}
if(num1!=5){
  alert("Not equal! Cattivo bambino")
} else{
  alert("Il numero che hai inserito è proprio 5. Bravo! Ecco una caramella")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let numeroIntero1;
let num1;
while (!numeroIntero1){
  num1=Number(prompt("Inserisci un numero Intero"));
  if(num1==parseInt(num1)){
    numeroIntero1=true    
  }
  else{
    alert("Input non valido! Devi inserire un numero intero!!")
  }
}
if(num1 % 5 !=0){
  alert("Il numero che hai inserito NON è dvisibile per 5. Mannaggia la miseria")
} else{
  alert("Il numero che hai inserito è dvisibile per 5. Bravo! Ecco una caramella");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let bastaCosi = false;
while (!bastaCosi) {
  let numeroIntero1 = false;
  let numeroIntero2 = false;
  let num1;
  let num2;
  while (!numeroIntero1) {
    num1 = Number(prompt("Inserisci il primo numero Intero"));
    if (num1 == parseInt(num1)) {
      numeroIntero1 = true
    }
    else {
      alert("Input non valido! Devi inserire un numero intero!!")
    }
  }
  while (!numeroIntero2) {
    num2 = Number(prompt("Inserisci il secondo numero Intero"));
    if (num2 == parseInt(num2)) {
      numeroIntero2 = true
    }
    else {
      alert("Input non valido! Devi inserire un numero intero!!")
    }
  }
  let a, b;
  if (num1 < num2) {
    a = num1; b = num2;
  } else {
    a = num2; b = num1;
  }

  if (num1 == 8 || num2 == 8 || num1 + num2 == 8 || b - a == 8) {
    alert("Missione compiuta!")
    bastaCosi=true

  }else{
    alert("Oh no, missione fallita! Bobbiamo rifare tutto da capo!")
  }

}




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let totalShoppingCart=Number(prompt("Inserire l'ammontare del proprio carrello")) 
let spesaTotale=(totalShoppingCart>=50)? totalShoppingCart:totalShoppingCart+10;
 console.log("La tua spesa totale è di "+spesaTotale+" euro");



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let totalShoppingCart=Number(prompt("Inserire l'ammontare del proprio carrello"));
let sconto=20/100;
let spesaTotale=(totalShoppingCart-totalShoppingCart*sconto>=50)? totalShoppingCart:totalShoppingCart+10;
console.log("La tua spesa totale è di "+spesaTotale+" euro");


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let num1, num2, num3;
let inputnumero1, inputnumero2, inputnumero3 = false;
while (!inputnumero1) {
  num1 = Number(prompt("Inserisci il primo numero"))
  if (num1%1!=0) {
    alert("Input non valido! Devi inserire un numero")
  } else {
    inputnumero1 = true;
  }
}
while (!inputnumero2) {
  num2 = Number(prompt("Inserisci il secondo numero"))
  if (num2%1!=0) {
    alert("Input non valido! Devi inserire un numero")
  } else {
    inputnumero2 = true;
  }
}
while (!inputnumero3) {
  num3 = Number(prompt("Inserisci il terzo numero"))
  if (num3%1!=0) {
    alert("Input non valido! Devi inserire un numero")
  } else {
    inputnumero3 = true;
  }
}
let a;
if (num2 < num1) {
  a = num1;
  num1 = num2;
  num2 = a;
}
if (num3 < num2) {
  a = num2;
  num2 = num3;
  num3 = a;
  if (num2 < num1) {
    a = num1;
    num1 = num2;
    num2 = a;
  }
}

console.log(num1 + " " + num2 + " " + num3);



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let num1= parseFloat(prompt("Inserire un numero"));
if(isNaN(num1)){
  alert("Ti avevo detto un numero, screanzato!");
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let num1= parseFloat(prompt("Inserire un numero"));
if(num1%1!=0){
  alert("Ti avevo detto un numero, screanzato!");
} else{
  if(num1%2==0){
    alert("Il numero è pari")
  }else{
    alert("Il numero è dispari")
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}


/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arr=[];
let i=0;
while (i<=10){
  arr[i]=i;
  i++;
}
console.log(arr)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr[arr.length-1]=100;
console.log(arr);