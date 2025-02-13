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

// PARAMETRI DELLE FUNZIONI
const smartAddition = function (n1, n2) {
  const sum = n1 + n2
  console.log(sum)
}

smartAddition(7, 9) // --> 16
smartAddition(4, 19) // --> 23

// n1 e n2 sono i PARAMETRI della funzione smartAddition
// 7 e 9, oppure 4 e 19 etc. si chiamano ARGOMENTI

const greetings = function (turtle) {
  const saluto = 'Ciao, ' + turtle + '!'
  console.log(saluto)
}

greetings('Michelangelo') // 'Ciao, Michelangelo!'
greetings('Donatello') // 'Ciao, Donatello!'
greetings('Raffaello') // 'Ciao, Raffaello!'

greetings() // 'Ciao, undefined!' :(((

const betterGreetings = function (tipoSaluto, nome) {
  const saluto = tipoSaluto + ', ' + nome + '!'
  console.log(saluto)
}

betterGreetings('Buongiorno', 'Giangiorgio')
betterGreetings('Buongiorno', 'Giangiorgio', 'Stefano') // il terzo parametro viene ignorato
betterGreetings('Massimiliano') // 'Massimiliano, undefined!'
// l'ordine dei parametri è fondamentale! la funzione associerà il primo argomento
// ricevuto con il primo parametro, il secondo argomento con il secondo parametro etc.

// VALORI DI DEFAULT PER I PARAMETRI (aka PARAMETRI OPZIONALI)
const anotherGreetings = function (nome, tipoSaluto = 'Ciao') {
  const saluto = tipoSaluto + ', ' + nome + '!'
  console.log(saluto)
}

anotherGreetings('Stefano', 'Buongiorno') // 'Buongiorno, Stefano!'
anotherGreetings('Gianni') // 'Ciao, Gianni!'

// VALORE DI RITORNO
// Una funzione, opzionalmente, può ritornare un valore al termine della sua esecuzione.
// Questa operazione si effettua con la parola "return".
// Una volta che viene "colpita" la parola return all'interno della funzione, l'esecuzione
// della funzione termina.
// A cosa serve ritornare un valore dall'esecuzione di una funzione? Serve a ottenere
// indietro il risultato calcolato dalla funzione, per poi utilizzarlo successivamente
// nel mio codice.

const anotherSum = function () {
  const sum = 10 + 20
  return sum
  // il return è l'ultima riga della funzione, perchè una volta raggiunto in ogni caso
  // la funzione termina
}

anotherSum() // VALE 30!!!

const totalSum = anotherSum() + 20 // è sempre un numero! vale 50
console.log('TOTALSUM VALE', totalSum)

const x = anotherSum() // x è 30, perchè anotherSum HA un valore di ritorno
const y = anotherGreetings('Stefano', 'Ciaone') // y è undefined, perchè anotherGreetings NON ha un valore di ritorno

const tellYourAge = function (eta) {
  console.log('Io ho ' + eta + ' anni.')
}

tellYourAge(19) // "Io ho 19 anni."
tellYourAge(anotherSum()) // "Io ho 30 anni."
// sono riuscito ad utilizzare il valore calcolato (e ritornato) da anotherSum come
// parametro di un'altra funzione! :O
