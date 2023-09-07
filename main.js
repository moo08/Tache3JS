//Les Types de variables
/*
Number
String
Boolean
undefined
null
object
Array 
*/

//declartaion

let prenom = "Modou"; //string

let age = 24; //number

let enLigne = true; //booleen

let choix = null; //null

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enLigne);
console.log(typeof choix);

//concaténation
console.log(prenom + ' ' + age + ' ans');
console.log(`Je m'appelle ${prenom}, j'ai ${age} ans`);

//Echapper un caractére antislash
console.log('il fait "beau aujourd\'hui"');

age = 27,
console.log(`je m'appelle ${prenom}, j'ai ${age} ans`);

//Déclaration de 3 variables
let x = 1
let y = 2
 z = x + y
console.log(z);

//Object
let user1 = {
    prenom: 'Jean',
    age: 44,
    adresse: {
        rue: '24 Ouakam',
        ville: 'Dakar'
    }
}

console.log(user1.prenom);
console.log(user1['prenom']);