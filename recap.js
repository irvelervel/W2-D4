// LOOPS
// Un loop è una struttura in grado di RIPETERE l'esecuzione di un blocco di codice

// Un ciclo può venire scritto al fine di ottenere un risultato, senza sapere (o tener conto) del numero di iterazioni necessarie al suo compimento
// Un ciclo di questo tipo viene tipicamente scritto con il costrutto WHILE

let coin = 'testa'
let numeroLanci = 0

while (coin === 'testa') {
  // al primo giro, la condizione viene valutata e se è TRUE il ciclo comincia!
  // ...viene eseguito il codice qui riportato...
  // alla fine del ciclo WHILE, potenzialmente il ciclo riparte!
  // viene RI-VERIFICATA la condizione, e se continua ad essere true il codice
  // verrà RI-ESEGUITO una nuova volta!

  // lancio della moneta
  // Math.random() // numero decimale compreso tra 0 e 1
  // diciamo che se il numero è inferiore a 0.5, abbiamo fatto "testa"
  // diciamo che se il numero è superiore a 0.5, abbiamo fatto "croce"

  numeroLanci++
  let numeroCasuale = Math.random() // cambia ad ogni lancio!

  if (numeroCasuale < 0.5) {
    console.log('È uscita testa!')
    coin = 'testa'
  } else {
    console.log('È uscita croce!')
    coin = 'croce'
  }
}

console.log(
  'Il gioco si è concluso, per avere croce ho impiegato ' +
    numeroLanci +
    ' lanci.'
)

// CICLO FOR
// Il ciclo FOR riesegue un blocco di codice un numero FINITO e PREDETERMINATO di volte!

for (let i = 0; i < 10; i++) {
  // si inserisce il codice da eseguire n volte
  // i assume 10 valori diversi: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  // i è sempre un numero!
  console.log(i)
}

// qui la i non è più defined

const numbers = [4, 78, 11, 46.5, 90, 100]

for (let i = 0; i < numbers.length; i++) {
  // i qui dentro è diventata SEMPRE un valido indice dell'array numbers!
  console.log(i) // 0, 1, 2, 3, 4, 5
  console.log(numbers[i]) // 4, 78, 11, etc.
}

// NUMERI CASUALI
// abbiamo detto che Math.random() torna un numero casuale tra 0 e 1
// ma se io ho un array di nomi...

const names = ['topogigio', 'aldo', 'giovanni', 'giacomo', 'sbirulino']

// 0, 1, 2, 3, 4

const index = Math.floor(Math.random() * names.length) // un intero casuale, che può essere 0, 1, 2, 3, 4

console.log(names[index])

// Math.random() * 5 -> minimo è 0.00005 | 4.99999
// Math.floor(Math.random() * 5) -> minimo è 0 | 4

// Math.floor(Math.random() * 10)
// 0.000001 * 10 -> 0.00001 -> arrotondiamo "per difetto" -> 0
// 0.999999 * 10 -> 9.99999 -> arrotondiamo "per difetto" -> 9

// Math.ceil(Math.random() * 10)
// 0.000001 * 10 -> 0.00001 -> arrotondiamo "per eccesso" -> 1
// 0.999999 * 10 -> 9.99999 -> arrotondiamo "per eccesso" -> 10

// ESERCIZIO DI RECAP
let animalsArray = [
  {
    name: 'Fufy',
    species: 'Cat',
    age: 5,
    furColor: 'white',
    numberOfLegs: 4,
    skills: ['meows', 'judging', 'purrs', 'sleeps'],
  },
  {
    name: 'Pluto',
    species: 'Dog',
    age: 1,
    furColor: 'gold',
    numberOfLegs: 4,
    skills: ['barks', 'plays', 'tail-wiggling', 'growls'],
  },
  {
    name: 'Poppy',
    species: 'Parrot',
    age: 2,
    furColor: 'green',
    numberOfLegs: 2,
    skills: ['sound-mimicking', 'sleeps', 'eating', 'flies', 'speaks'],
  },
]

console.log('------------------------')

// stampiamo in console solamente le specie di ogni elemento di animalsArray
for (let i = 0; i < animalsArray.length; i++) {
  console.log(animalsArray[i].species)
}

// ora facciamo la stessa cosa, ma cerchiamo di ottenere in console:

// "Cat Dog Parrot"

let str = ''

for (let i = 0; i < animalsArray.length; i++) {
  str = str + animalsArray[i].species + ' '
  // al primo giro str è diventata "Cat "
  // al secondo giro str è diventata "Cat Dog "
  // al terzo giro str è diventata "Cat Dog Parrot "
}

console.log(str)
