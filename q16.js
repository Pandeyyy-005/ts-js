"use strict";
class Person {
}
class Student extends Person {
    name;
    id;
    role;
    constructor(name, id, role) {
        super();
        this.name = name;
        this.id = id;
        this.role = role;
    }
    getDetails() {
        console.log(`student name is ${this.name} and id is ${this.id}`);
    }
    getRole() {
        console.log(`role is ${this.role}`);
    }
}
class Teacher extends Person {
    name;
    id;
    role;
    constructor(name, id, role) {
        super();
        this.name = name;
        this.id = id;
        this.role = role;
    }
    getDetails() {
        console.log(`teacher name is ${this.name} and id is ${this.id}`);
    }
    getRole() {
        console.log(`role is ${this.role}`);
    }
}
const s = new Student("tom", 12, "student");
const t = new Teacher("jerry", 123, "teacher");
s.getDetails();
s.getRole();
t.getDetails();
t.getRole();
