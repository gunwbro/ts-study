interface IPerson {
  age: number;
  name: string;
  NewYear(): void;
  print(): void;
}

class Person implements IPerson {
  public age: number;
  public name: string;

  constructor(age: number, face: string) {
    this.age = age;
    this.name = face;
  }

  NewYear(): void {
    this.age++;
  }

  print() {
    console.log(`${this.name}의 나이는 ${this.age} 입니다.`);
  }
}

let sohee: Person = new Person(23, "Sohee");

sohee.print();
sohee.NewYear();
sohee.print();