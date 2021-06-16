// Piccola rubrica, dove l’utente può inserire 3 persone 
// con proprietà nome, cognome, numero di telefono.
// Stampate la lista  con dei console.log delle persone 
// nella rubrica con il for e for-in
// var rubrica = {
//    users: []
// }
// # pushiamo gli oggetti delle persone in users, man mano che l'utente li inserisce

var rubrica = {
    users: [] // persone da aggiungere nell'array
}

while (rubrica.users.length < 3)  { // aggiungi fino a 3 persone con while
    var userName = prompt("Name") // metti nome
    var userSurname = prompt("Surname") // metti cognome
    var userNumber = prompt("Phone number") // metti numero

    rubrica.users.push({ // pushi dentro l'array i prompt che hai scritto
        name: userName, // object 
        surname: userSurname, // object 
        number: userNumber, // object
    });
}

for (var i = 0; i < rubrica.users.length; i++) { // con for navighiamo dentro l'array di users
    for (var key in rubrica.users[i]) { // qui più internamente per stampare le singole proprietà
        console.log(key, rubrica.users[i][key]) // qui c'è il console log dell'array e del singolo
    }
}