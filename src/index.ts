import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([11, 3, -5, 0, 99]);
// const sorter = new Sorter(numbersCollection);
// console.log(numbersCollection.data);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XPotato123');
const sorter = new Sorter(charactersCollection);
console.log(charactersCollection.data);
sorter.sort();
console.log(charactersCollection.data);
