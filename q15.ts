class Course{
    courseName:string;
    courseCode:number;
    instructor:string
    constructor(courseName:string,courseCode:number,instructor:string) {
        this.courseName=courseName
        this.courseCode=courseCode
        this.instructor=instructor
    }
    displayInfo():void{
console.log(`instructor is ${this.instructor},coursecode is ${this.courseCode} and coursename is ${this.courseName}`);

    }
}
const s=new Course("ts",12,"professor")
s.displayInfo()