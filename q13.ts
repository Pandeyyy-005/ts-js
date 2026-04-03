class Student{
    name:string;
    studentId:number;
    grade:string;
    address:string
    constructor(name:string,studentId:number,grade:string,address:string) {
        this.name=name
        this.grade=grade
        this.studentId=studentId
        this.address=address
    }
    displayInfo():void{
        console.log(`name is ${this.name},id is ${this.studentId},grade is ${this.grade} and address is ${this.address}`);
        
    }

}
const s=new Student("tom",12,"A","A/201 yk ngr")
s.displayInfo()