function checkStudent(age) {
    if (age<=0) {
        throw new Error("age cna't be negative or zero");
        
    } else {
        console.log("age is eligible");
        
    }
}
function check() {
    checkStudent(-1)
}
function verify() {
    try {
        check()
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }
}
verify()