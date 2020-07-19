import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

// const numbersCollection = new NumbersCollection([11, 3, -5, 0, 99]);
// const sorter = new Sorter(numbersCollection);
// console.log(numbersCollection.data);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('XPotato123');
// const sorter = new Sorter(charactersCollection);
// console.log(charactersCollection.data);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(1);
linkedList.add(5);
linkedList.add(0);

const sorter = new Sorter(linkedList);
linkedList.print();
sorter.sort();
linkedList.print();
