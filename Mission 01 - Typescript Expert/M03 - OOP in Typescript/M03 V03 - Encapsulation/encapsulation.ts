/*
Access Modifier
==============
Public
Private
Protected

Immutability Modifier
=====================
Readonly
*/

class Student {
  constructor(
    public name: string,
    private _id: number,
  ) {}

  get id(): number {
    return this._id;
  }

  set id(newId: number) {
    this._id = newId;
  }
}

const student1 = new Student("Shama", 45);

student1.id = 343;

console.log(student1.id);
