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
    name;
    _id;
    constructor(name, _id) {
        this.name = name;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(newId) {
        this._id = newId;
    }
}
const student1 = new Student("Shama", 45);
student1.id = 343;
console.log(student1.id);
export {};
