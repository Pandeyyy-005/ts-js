abstract class Institute{
abstract getInstitutionType():void
}
class School extends Institute{
    institution:string;
    constructor(institution:string) {
        super()
        this.institution=institution
    }
    getInstitutionType(): void {
        console.log(`institution is ${this.institution}`);
        
    }

}
const s=new School("school")
s.getInstitutionType()