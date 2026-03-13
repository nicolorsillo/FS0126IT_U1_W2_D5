/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"]

console.log("-------Esercizio 1--------")

for (i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("-------Esercizio 2--------")

console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("-------Esercizio 3--------")

console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("-------Esercizio 4--------")

pets.push(pets.shift())

console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
]

console.log("-------Esercizio 5--------")

// creo una funzione per generare un numero intero randomico da 1 a 9
const randomNumberFrom0to9 = function () {
  const number = Math.floor(Math.random() * 10)
  return number
}
// creo una funzione per geneare un carattere MAIUSCOLO randomico
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const randomLetter = function () {
  const i = Math.floor(Math.random() * 26)
  const letter = alphabet.charAt(i)
  return letter
}
// creao una funzione per generare una targa randomica
const randomLicensePlate = function () {
  const licensePlate = `${randomLetter()}${randomLetter()}${randomNumberFrom0to9()}${randomNumberFrom0to9()}${randomNumberFrom0to9()}${randomLetter()}${randomLetter()}`
  return licensePlate
}

// aggiungo la targa ad ogni auto e mi assicuro che ogni targa sia diversa dall'altra
cars[0].licensePlate = randomLicensePlate()

for (i = 1; i < cars.length; i++) {
  let y = randomLicensePlate()
  for (x = 0; x < i; x++) {
    if (y === cars[x].licensePlate) {
      licensePlate = randomLicensePlate()
    } else {
      cars[i].licensePlate = y
    }
  }
}
for (i = 0; i < cars.length; i++) {
  console.log(cars[i].licensePlate)
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("-------Esercizio 6--------")

// Funzione pre creare una nuova targa diversa dalle precedenti
const newAutoLP = function () {
  let newAuto = randomLicensePlate()
  for (i = 0; i < cars.length; i++) {
    if (newAuto === cars[i].licensePlate) {
      newAuto = randomLicensePlate()
    }
  }
  return newAuto
}
// Aggiumgo un nuovo oggetto auto nell'array
cars.push({
  brand: "Audi",
  model: "Q3",
  color: "daytona",
  trims: ["sport", "style", "s-line"],
  licensePlate: newAutoLP(),
})
// Rimuovo l'ultimo elemento della proprietà "trims" da ogni auto
for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

console.log("-------Esercizio 7--------")

for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("-------Esercizio8--------")

for (i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log("-------Esercizio 9--------")
let j = 0
while (numericArray[j] !== 32 && j < numericArray.length) {
  console.log(numericArray[j])
  j++
}

// Versione che stampa anche il 32
/*
let j = 1
if (numericArray[0] === 23) {
  console.log(numericArray[0])
} else {
  while (numericArray[j - 1] !== 32 && j < numericArray.length) {
    console.log(numericArray[j])
    j++
  }
}
*/

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

console.log("-------Esercizio 10--------")

const letterPosition = []

for (i = 0; i < charactersArray.length; i++)
  switch (charactersArray[i]) {
    case "a":
      letterPosition.push(1)
      break
    case "b":
      letterPosition.push(2)
      break
    case "c":
      letterPosition.push(3)
      break
    case "d":
      letterPosition.push(4)
      break
    case "e":
      letterPosition.push(5)
      break
    case "f":
      letterPosition.push(6)
      break
    case "g":
      letterPosition.push(7)
      break
    case "h":
      letterPosition.push(8)
      break
    case "i":
      letterPosition.push(9)
      break
    case "j":
      letterPosition.push(10)
      break
    case "k":
      letterPosition.push(11)
      break
    case "l":
      letterPosition.push(12)
      break
    case "m":
      letterPosition.push(13)
      break
    case "n":
      letterPosition.push(14)
      break
    case "o":
      letterPosition.push(15)
      break
    case "p":
      letterPosition.push(16)
      break
    case "q":
      letterPosition.push(17)
      break
    case "r":
      letterPosition.push(18)
      break
    case "s":
      letterPosition.push(19)
      break
    case "t":
      letterPosition.push(20)
      break
    case "u":
      letterPosition.push(21)
      break
    case "v":
      letterPosition.push(22)
      break
    case "w":
      letterPosition.push(23)
      break
    case "x":
      letterPosition.push(24)
      break
    case "y":
      letterPosition.push(25)
      break
    case "z":
      letterPosition.push(26)
      break
    default:
      letterPosition.push("il valore inserito non è una lettera dell'alfabeto")
      break
  }
console.log(charactersArray)
console.log(letterPosition)
