abstract class Person{
 abstract getDetails():void
 abstract getRole():void
}
class Student extends Person{
    name:string;
    id:number;
    role:string
    constructor(name:string,id:number,role:string){
        super()
        this.name=name
        this.id=id
        this.role=role
    }
    getDetails(): void {
        console.log(`student name is ${this.name} and id is ${this.id}`);
        
    }
    getRole(): void {
        console.log(`role is ${this.role}`);
        
    }

}
class Teacher extends Person{
        name:string;
    id:number;
    role:string;
    constructor(name:string,id:number,role:string){
        super()
        this.name=name
        this.id=id
        this.role=role
    }
    getDetails(): void {
         console.log(`teacher name is ${this.name} and id is ${this.id}`);
    }
    getRole(): void {
        console.log(`role is ${this.role}`);
        
    }

}
const s=new Student("tom",12,"student")
const t=new Teacher("jerry",123,"teacher")
s.getDetails()
s.getRole()
t.getDetails()
t.getRole()