interface Management{
    addStudent():void
    rmvStudent():void
}
class Student{
    name:string
    id:number
    constructor(name:string,id:number) {
        this.name=name
        this.id=id
    }
}
class School implements Management{
    totalStudent:number=0
    studentList:Student[]=[]
    addStudent(): void {
        
    }
    rmvStudent(): void {
        
    }

}
