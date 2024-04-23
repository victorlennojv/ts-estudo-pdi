class Person {
  name: string;
  age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}


const persons: Person[] = [];
persons[0] = new Person("Resolvo", 12);
persons[1] = { name: "Daniel", age: 4 };
persons[2] = { name: "Collin" };

// Inline type

const personss: { name: string, age?: number }[] = []; 
personss[0] = { name: "Ricardo", age: 2 };
personss[1] = { name: "Daniel", age: 4 };
personss[2] = { name: "Collin" };

// Inline type [2]
// type Name = string;
// type Age = number;
type Person2 = { name: string, age?: number }; // type Person2 = { name: Name, age: Age }
const personsss: Person2[] = [];
personsss[0] = { name: "Ricardo", age: 2 };
personsss[1] = { name: "Daniel", age: 4 };
personsss[2] = { name: "Collin" };