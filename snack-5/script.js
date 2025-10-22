const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Uso filter per creare un nuovo array con solo i numeri pari (resto della divisione per 2 uguale a 0)
const evenNumbers = nums.filter(num => num % 2 === 0);

console.log(evenNumbers);