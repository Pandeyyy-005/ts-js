export class Student {
    name;
    id;
    address;
    constructor(name,id,address) {
        this.name=name
        this.id=id
        this.address=address
    }
    displayInfo(){
        console.log(`name is ${this.name},id is ${this.id} and address is ${this.address}`);
        
    }
}
