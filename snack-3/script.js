const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// Uso map per creare un nuovo array con ogni numero incrementato di 1
const incrementedNumbers = numbers.map(num => num + 1);

console.log(incrementedNumbers);