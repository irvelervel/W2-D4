// LE FUNZIONI IN JS
// Le funzioni sono blocchi di codice riutilizzabili.
// Le funzioni si creano al fine di:
// - evitare ripetizioni e copia/incolla (codice più lungo, portandosi dietro forse errori)
// - organizzare il codice in "sezioni"
// - riuscire con poco sforzo a riutilizzare le nostre parti di logica

// D R Y -> Don't Repeat Yourself

// DICHIARAZIONE DI FUNZIONE (DEFINIZIONE)
const bark = function () {
  // dentro le graffe inserite il blocco di codice che volete
  // rendere parte della funzioni
  console.log('BAU')
}

// DICHIARARE UNA FUNZIONE !== ESEGUIRE UNA FUNZIONE

// ESECUZIONE (INVOCAZIONE) DI FUNZIONE
bark() // <-- invocazione della funzione bark
bark() // <-- invocazione della funzione bark

// // NON SCRIVIAMO LE FUNZIONI COSÌ!
// bark2() (HOSTING) <-- prima l'invocazione (brrrrr)
// function bark2() { <-- poi la dichiarazione :')
//   console.log('BAU')
// }

const logRandomNumber = function () {
  const randomNumber = Math.floor(Math.random() * 5)
  console.log(randomNumber)
}

logRandomNumber()
logRandomNumber()
logRandomNumber()

const addition = function () {
  // funzione che somma due numeri
  const sum = 12 + 23 // 35
  // alert(sum) // <-- popup fastidioso del browser che si chiude SOLO se premete ok
  console.log(sum)
}

addition()

const addition2 = function () {
  const sum = 12 + 35
  console.log(sum)
}
