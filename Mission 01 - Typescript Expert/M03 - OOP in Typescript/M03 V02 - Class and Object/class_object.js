class Student {
  name;
  id;
  constructor(name, id) {
    ((this.name = name), (this.id = id));
  }
}
console.log(new Student("Sadik", 3));
console.log(new Student("Eiias", 50));
export {};
