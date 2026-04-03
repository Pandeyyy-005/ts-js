interface Attendance{
    markAttendance(isPresent:boolean):void
}
class Student implements Attendance{
    markAttendance(isPresent: boolean): void {
        if (isPresent) {
            console.log("present");
            
        } else {
            console.log("absent");
            
        }
    }

}
const s=new Student()
s.markAttendance(false)