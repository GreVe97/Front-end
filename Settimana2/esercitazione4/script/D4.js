/*ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..

/* SCRIVI QUI LA TUA RISPOSTA */

function area(base,altezza){
    return (base*altezza)
}

console.log(area(10,5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a,b){
    if(a==b){
        return (a+b)*3
    }
    return (a+b)
}
console.log(crazySum(5,5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(a){
    if(a>19){
        return (Math.abs(a - 19)*3)
    }
    return Math.abs(a - 19);
}
console.log(crazyDiff(20))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    if (((n>20) && (n<=100))||n==400){
        return true
    }
    return false
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) { 
    const EPICODE="EPICODE";
    for(let i=0;i<EPICODE.length;i++){
        if(stringa[i]!=EPICODE[i]){
            return EPICODE+stringa
        }
    }
    return stringa
}

let frase="Frase a caso";

console.log(frase+"\n"+epify(frase))


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(a) {
    if(a%3==0 ||a%7==0){
        return true
    }
    return false
}
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa) {
    let a="";
    for(let i=0;i<stringa.length;i++){
        a+=stringa[stringa.length-1-i];
    }
    return a
}
let parola="Invertimi"
console.log(parola+ "\n"+reverseString(parola));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(frase){
    let Frase=frase[0].toUpperCase();
    for(let i=1;i<frase.length;i++){
        if(frase[i-1]==" "){
            Frase+=frase[i].toUpperCase()
        }else{
            Frase+=frase[i];
        }
    }
return Frase
}
let esercizio8="frase le cui prime lettere di ogni parola vanno messe in maiuscolo"
console.log(esercizio8 +"\n"+ upperFirst(esercizio8))


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(frase) {
    let ras="";
    for(i=1;i<frase.length-1;i++){
        ras+=frase[i];
    }
    return ras
}
let esercizio9="Frase che non dovrebbe contenere il primo e l'ultimo carattere"
console.log(esercizio9 + "\n"+cutString(esercizio9))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let arr=[];
    for (let i=0; i<n; i++) {
        arr[i]=Math.floor(Math.random()*11); 
    }
    return arr
}
let esercizio10=20;
console.log("Il numero è 20"+"\n"+giveMeRandom(esercizio10))