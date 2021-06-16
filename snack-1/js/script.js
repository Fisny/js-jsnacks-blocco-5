// Creare un oggetto palla che abbia le 
// seguenti proprietà.
// Nome = palla
// Peso = 10

var palla = {
    nome: 'palla',
    peso: 10
}
// Attraverso un prompt dare la possibilità 
// all’utente di modificare il peso della palla.

console.log(palla)
palla.peso = parseInt(prompt("peso"))
console.log(palla)

// Inserire  l’oggetto palla in una array

console.log('parte palla')
console.log('parte giochi')

var giochi = [];

giochi.push(palla);

// Permettere all’utente di inserire un nuovo oggetto
//  all’interno dell’array giochi

var newObject = prompt ("inserisci oggetto")
var newWeight = parseInt(prompt("peso"))

giochi.push({
    nome2: newObject,
    peso2: newWeight,
})

console.log(giochi)