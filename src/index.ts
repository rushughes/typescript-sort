import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([11, 3, -5, 0, 99]);
const sorter = new Sorter(numbersCollection);
console.log(numbersCollection.data);
sorter.sort();
console.log(numbersCollection.data);
