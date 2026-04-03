class InvalidStudentAge extends Error{
constructor(msg) {
    super(msg)
    this.name="InvalidStudentAge"
}
}
function isValidStudentAge(age) {
    try {
        if (age<=0) {
            throw new InvalidStudentAge("Age can't be negative or zero");
            
        } else {
         console.log("Age is valid");
            
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }

}
isValidStudentAge(-7)
