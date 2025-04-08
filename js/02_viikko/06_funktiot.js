//01
//Luo funktio nimeltä add, joka: 
//Ottaa kaksi parametria, a ja b.
//Palauttaa a:n ja b:n summan.
//Kutsu funktiota arvoilla 10 ja 5.
function add(a, b){
return a + b ;
}
  let result1 = add(5,10);


//Tulosta tulos käyttäen console.log().

console.log(result1);// = 15

//Bonus: Kutsu funktiota useita kertoja eri argumenteilla ja tulosta kaikki tulokset.

let result2 = add(20,30); 
let result3 = add(20, -4);   
let result4 = add(0, 0);     
let result5 = add(100, 200); 

console.log(result2);// = 50
console.log(result3);// = 16
console.log(result4);// = 0
console.log(result5);// = 300


//02

/* Luo funktio nimeltä isEven, joka:
Ottaa yhden parametrin, num.

Palauttaa true, jos num on parillinen, muuten palauttaa false.
Kutsu funktiota arvoilla 4 ja 7.
Tulosta tulokset käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/



function isEven(num) {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

console.log(isEven(4)); // true
console.log(isEven(7)); // false
