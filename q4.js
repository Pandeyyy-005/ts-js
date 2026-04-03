class Student{
    name;
    studentId;
    grade;
    constructor(name,studentId,grade) {
        this.name=name
        this.studentId=studentId
        this.grade=grade
    }
    displayInfo(){
        console.log(`name is ${this.name},studentid is ${this.studentId} and grade is ${this.grade}`);
        
    }
}
const s=new Student("tom",12,"A")
s.displayInfo()