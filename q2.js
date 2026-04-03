function validateStudentAge(age) {
    try {
        if (age<5) {
            throw new Error("Age is <5");
            
        } else {
            console.log("age is valid");
            
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }
}
validateStudentAge(4)