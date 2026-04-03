function studentDetails(details) {
    return new Promise((resolve, reject) => {
        if (details) {
            resolve(
                {
                    name:"abc",
                    id:12,
                    address:"A/301 yk ngr"
                }
            )
        } else {
         reject("no details found")   
        }
    });
}
studentDetails(false)
.then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
