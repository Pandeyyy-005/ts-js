function studentRecord(data) {
    return new Promise((resolve, reject) => {
        if (data) {
           resolve({
            name:"tom",
            id:12,
           }) 
        } else {
            reject("no data found")
        }
    });
}
studentRecord(false)
.then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});