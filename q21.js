const student=[
    {
        name:"tom",
        marks:80
    },
    {
        name:"jerry",
        marks:45
    },
    {
name:"james",
marks:95
    }
]
function topStudent() {
    return student.filter((m)=>{
        return m.marks>45
    })
}
console.log(topStudent());
