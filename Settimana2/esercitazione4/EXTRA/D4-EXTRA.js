// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkArray(arr) {
    let somma =0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]>5){
            console.log("L'elemento n. "+i+" è maggiore di 5, infatti è "+ arr[i]);
            somma +=arr[i];    
        }
    }
    return somma
}
let arr=giveMeRandom(20);
console.log(arr+"\n"+checkArray(arr));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function shoppingCartTotal(shoppingCart) {
    let totale=0;
    for(let i=0;i<shoppingCart.length;i++){
        totale=shoppingCart[i].price*shoppingCart[i].quantity;
    }
    return totale
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function addToShoppingCart(shoppingItem){
    shoppingCart.push(shoppingItem);   //Non mi piace il fatto che uso shoppingCart senza passarlo come parametro!!
    return shoppingCart.length
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(shoppingCart){
    let oggetto_più_costoso=shoppingCart[0];
    for(let i=1;i<shoppingCart.length;i++){
        if(shoppingCart[i].price>oggetto_più_costoso.price){
            oggetto_più_costoso=shoppingCart[i];
        }
    }
    return oggetto_più_costoso
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(shoppingCart){
    return shoppingCart[shoppingCart.length-1]
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=Math.floor(Math.random()*9);
console.log("Estrazione per esercizio 6 Extra: " +x);
loopUntil(x);
function loopUntil(x) {
    let contatore=0;
    let numeroCasuale;
    while (contatore<3){
        numeroCasuale=Math.random()*9;
        if(numeroCasuale>x){
            contatore+=1;
        }else {
            contatore=0;
        }
        console.log("è uscito il numero "+numeroCasuale);
    }
    return

}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function average(arr){
    let media=0;
    let ContatoreValoriNumerici=0;
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]!="number"){
            media+=arr[i];
            ContatoreValoriNumerici++;
        }
    }
    if(ContatoreValoriNumerici!=0){
        media=media/ContatoreValoriNumerici;
    }
    
    return media
}

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function longest(arr){
    let parolaLunga=arr[0];

    for(let i=1;i<arr.length;i++){
        if (arr[i].length>parolaLunga.length){
            parolaLunga=arr[i];
        }
    }
    return parolaLunga;
}
let esercizio8EXTRA=["mannaggia","la","miseriaccia"];
console.log(esercizio8EXTRA + "\n"+"La parola più lunga di questo array è: "+longest(esercizio8EXTRA))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function antiSpam(emailContent){
    let a="SPAM"; let b="SCAM";
    let strike1=0; let strike2=0;
    let indice1=0; let indice2=0; 
    for(let i=0;i<emailContent.length;i++){
        if(emailContent[i]!=a[indice1]){ 
            strike1=0;
            indice1=0;            
        }else{
            strike1++;
            indice1++;
        }
        if(emailContent[i]!=b[indice2]){
            strike2=0;
            indice2=0;
        }else{
            strike2++;
            indice2++
        }
    
        if(strike1==4||strike2==4){
            return false
        }
    }
    return true

}

let esercizio9EXTRA="Prova EMAIL-Content";
console.log(esercizio9EXTRA+"\n"+ antiSpam(esercizio9EXTRA));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function matrixGenerator(x,y) {
    let matrice=[];   
    for(let i=0;i<x;i++){
        matrice[i]=[];
        for (let j=0;j<y;j++){
           matrice[i][j]=String(i)+String(j);
        }
    
    }
    return matrice
    
}
let righe=6; let colonne=5;
console.log(matrixGenerator(righe,colonne))