"use strict";
class Course {
    courseName;
    courseCode;
    instructor;
    constructor(courseName, courseCode, instructor) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }
    displayInfo() {
        console.log(`instructor is ${this.instructor},coursecode is ${this.courseCode} and coursename is ${this.courseName}`);
    }
}
const s = new Course("ts", 12, "professor");
s.displayInfo();
