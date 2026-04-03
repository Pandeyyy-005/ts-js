"use strict";
class Student {
    name;
    studentId;
    grade;
    address;
    constructor(name, studentId, grade, address) {
        this.name = name;
        this.grade = grade;
        this.studentId = studentId;
        this.address = address;
    }
    displayInfo() {
        console.log(`name is ${this.name},id is ${this.studentId},grade is ${this.grade} and address is ${this.address}`);
    }
}
const s = new Student("tom", 12, "A", "A/201 yk ngr");
s.displayInfo();
