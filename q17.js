"use strict";
class Student {
    markAttendance(isPresent) {
        if (isPresent) {
            console.log("present");
        }
        else {
            console.log("absent");
        }
    }
}
const s = new Student();
s.markAttendance(false);
