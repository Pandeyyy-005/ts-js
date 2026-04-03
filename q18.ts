function getStudentInfo<T>(info:T) {
    return info
}
console.log(getStudentInfo<string>("tom"));
console.log(getStudentInfo<number>(12));


