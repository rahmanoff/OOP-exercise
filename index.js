import { print } from './js/lib.js';

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

class Inhabitant {
   constructor(species, name, gender,saying) {
      this.species = species;
      this.name = name;
      this.gender = gender;
      this.saying = saying;
   }
}

class Animal extends Inhabitant {
   constructor (species, name, gender, saying) {
      super (species, name, gender, saying);
      this.legs = 4;
   }
}

class Dog extends Animal {
   constructor (name, gender, saying) {
      super('dog', name, gender, saying);
   }
}

const dog = {
      species: 'dog',
      name: 'Toby',
      gender: 'male',
      legs: 4,
      hands: 0,
      saying: 'woof-woof',
      friends: ['Mary', 'John'],
   };
const cat = {
      species: 'cat',
      name: 'Alice',
      gender: 'male',
      legs: 4,
      hands: 0,
      saying: 'meow',
      friends: ['Mary', 'John'],
   };
const woman = {
      species: 'woman',
      name: 'Mary',
      gender: 'female',
      legs: 2,
      hands: 2,
      saying: 'Hi, John!',
      friends: ['John', 'Alice', 'Toby'],
   };
const man = {
      species: 'man',
      name: 'John',
      gender: 'male',
      legs: 2,
      hands: 2,
      saying: 'Hi, Mary!',
      friends: ['Mary', 'Toby', 'Alice'],
   };

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */

const inhabitants = [dog, cat, woman, man];
const props = ['species', 'name', 'gender', 'legs', 'hands', 'saying', 'friends'];
   
inhabitants.map((item) => {
   print(props.map((prop) => item[prop]).join('; '));
});