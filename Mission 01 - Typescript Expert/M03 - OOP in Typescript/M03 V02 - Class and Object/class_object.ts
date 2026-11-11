class Student {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    ((this.name = name), (this.id = id));
  }
}

console.log(new Student("Sadik", 3));
console.log(new Student("Eiias", 50));
