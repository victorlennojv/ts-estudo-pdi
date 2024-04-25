class Person {
  name: string; // Here we can have types and values, if i define a type as name: "Victor" | "Monique", only yhis values will be acceptable.
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

// type merge

type Entity = {
  id: number;
  paradigma: "oo" | "functional"
}

type testMerge = Person & Entity;

const person3: testMerge[] = [];

person3[0] = { name: "Daniel Lucas", age: 4 }; // Becasuse of the merge between Person and Entity, this guy needs an id to accomplish the type.
person3[2] = { name: "Telefel El", age: 2, id: 5, paradigma: "test" };
person3[1] = { name: "Daniel El", age: 1, id: 3, paradigma: "oo" };


interface IEntity {
  id: number;
}

interface IPerson extends IEntity{
  name: string;
  age: number;
  paradigm: string; 
}


const person4: IPerson[] = [];

person4[0] = { name: "Daniel Lucas", age: 4 };
person4[2] = { name: "Telefel El", age: 2, id: 5, paradigm: "test" };
person4[1] = { name: "Daniel El", age: 1, id: 3, paradigm: "oo" };
