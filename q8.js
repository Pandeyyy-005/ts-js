function studentData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (data) {
                resolve({
                    name:"tom",
                    id:12,
                },
            {
                name:"jerry",
                id:13
            },
        {
            name:"harry",
            id:15
        })
            } else {
                reject("no data found")
            }
        },1000)
    });
}
async function find() {
    try {
        let data=await find(true)
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
find()