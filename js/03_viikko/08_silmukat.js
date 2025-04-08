//01

//Tee funktio nimeltä logOddNumbers:
 // - Se tulostaa konsoliin kaikki parittomat numerot 1 ja 100 välillä.
  // Eli 1, 3, 5, 7, 9, 11 jne. lukuun 99 asti.
function logOddNumbers(){
    let laskuri = 1
    while(laskuri<=99){
      console.log(laskuri)
      laskuri+=2;
    }
    
  }
  logOddNumbers();
  
 


  //02

  // Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.
function logEvenNumbers(){
    let calculater = 2
    while(calculater<=50){
        console.log(calculater)
        if(calculater<50){
            console.log(100 - calculater)
        }
        
        calculater+=2;
    }
}
logEvenNumbers();



//03

//Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 //ja ajan (tunteina) ja laskee sitten keskinopeuden.
 //Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 //Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */

// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.

function averageSpeed(){
    while(true){
    let distance = parseFloat(prompt("Give distance."))
        //ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyyksi.
    if(distance == 0) {
        break;
    }
    //eli ole luku tai negatiivinen 
if(isNaN(distance) || distance <0) {
    //palaa silmukaan alkuun
    continue;
}
let time = parseFloat(prompt("Give time."))

//Ei ole luku tai on negatiivinen
if(isNaN(time) || time< 0){
    //palaa silmukaan alkuun
    continue;
}

let avarage = distance / time;
alert("Avarge speed is" + avarage);

    }

} 
averageSpeed()


//04

    



