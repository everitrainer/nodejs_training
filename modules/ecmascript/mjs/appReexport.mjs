// appReexport.mjs
import { add, subtract } from './indexReexport.mjs';

console.log('Sum:', add(10, 5)); // Sum: 15
console.log('Difference:', subtract(10, 5)); // Difference: 5
