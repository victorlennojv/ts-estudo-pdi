class Repository<T> {
  list: T[];

  constructor () {
    this.list = [];
  }

  add (element: T) {
    this.list.push(element);
  }
}

class Entity {
	constructor (readonly id: number) {
	};
}

class Person {
  constructor (readonly name: string, readonly age: number) {

  }
}

class Book {
  constructor (readonly title: string) {

  };
}

const persons = new Repository(); // Aceita qualquer tipo
persons.add(new Person("Bob Martin", 60));
persons.add(new Book("The Code Book")); 

const persons2 = new Repository<Person>(); // Aceita apenas Person type
persons2.add(new Person("Bob Martin", 60)); // Valor aceito
persons2.add(new Book("The Code Book")); // Estoura erro de tipagem

const persons3 = new Repository<Person | Book>(); // Aceita Person e Book type
persons3.add(new Person("Bob Martin", 60)); // Valor aceito
persons3.add(new Book("The Code Book")); // Valor aceito

/* É possível limitar o critério de aceite apenas para quem extend certa classe. Ex:
	se a class Repository fosse: class Repository< T extends Entity>
	nesse caso > persons.add(new Person("Bob Martin", 60)) só seria aceito se a class Person extender Entity dessa maneira: class Person extends Entity. */