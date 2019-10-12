import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharacterCollection';

const numbersCollection = new NumbersCollection([10, 3, -6, 0]);
const sorterNumbers = new Sorter(numbersCollection);
sorterNumbers.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const sorterCharacters = new Sorter(charactersCollection);
sorterCharacters.sort();
console.log(charactersCollection.data);
