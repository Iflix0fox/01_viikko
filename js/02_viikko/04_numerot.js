
//Luo kaksi muuttujaa:
//numString1 arvolla "42".
//numString2 arvolla "3.14".
 
let numString1 = "3.14";

let numString2 = "42";


//Käytä parseInt()-funktiota muuntaaksesi numString1 kokonaisluvuksi.
parseInt(numString1);

//Käytä parseFloat()-funktiota muuntaaksesi numString2 liukuluvuksi.

parseFloat(numString2);

//Tulosta tulokset käyttäen console.log() viestien kera:
console.log(parseFloat(numString1),parseInt(numString2));

//"Kokonaisluku on 42."
//"Liukuluku on 3.14."





//Luo muuttuja nimeltä price ja anna sille arvoksi 19.56789.

let price = 19.56789;

//Käytä .toFixed()-metodia:

//Pyöristääksesi hinnan kahden desimaalin tarkkuuteen.
console.log(price.toFixed(2)); // = 19.57


//Pyöristääksesi hinnan ilman desimaaleja.

console.log(price.toFixed()); // = 20 

//Tulosta molemmat tulokset käyttäen console.log() viestien kera:


//"Hinta 2 desimaalilla: 19.57"

//"Hinta ilman desimaaleja: 20"


// 08_numerot

//Luo kaksi muuttujaa: num1 arvolla "10".ja num2 arvolla "notANumber".
//Muunna num1 ja num2 käyttäen parseFloat()-metodia ja Tulosta num1:n ja num2:n summa käyttäen console.log().

let num_01 = 10;

let num_02 = "nor a number";
 console.log(parseFloat(num_01), "ja ", parseFloat(num_02));


//(Huom: Jos toinen arvoista on NaN, tulokseksi tulee NaN, joka tulostuu automaattisesti.) Esimerkkituloste:
//NaN (jos yhteenlaskussa on virheellinen syöte).
//10 (jos molemmat syötteet ovat kelvollisia numeroita).