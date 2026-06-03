/*class and object in javascript*/
class StudentData {
    // initialize by new keyword
    //jab bhi object create hoga to constructor automatically call hoga
    constructor(fname, rollNo, course) {
        this.fname = fname; 
        this._rollNo = rollNo;
        this.course = course;
    }
    //method 
    present() {
        return `${this.fname} is present in this ${this.course} class.`;
    }
    absent() {
        return `${this.fname} is absent in this ${this.course} class.`;
    }
    paperDena() {
        return `${this.fname} is giving paper in this ${this.course} class.`;
    }
    // getter
    get rollNumber() {
        return this._rollNo
    }
    // setter
    set rollNumber(rollNo) {
        if (rollNo <= 0) {
            console.log("This is not a valid roll number");
            return;
        }
        this._rollNo = rollNo;
    }
}
let std1 = new StudentData("admin", 1, " web n dev");
let std2 = new StudentData("jhon", 2, " graphic design");
let std3 = new StudentData("don", 3, "web n dev");
// console.log(std1);//object
// console.log(std1.fname)//admin
// console.log(std2);//object
std2.rollNumber = 5
std3.rollNumber = -3
// console.log(std2.rollNumber);//5
// console.log(std3.rollNumber);//-3
// console.log(std3.course);//web n dev
console.log(std1.present());
console.log(std2.absent());
console.log(std3.paperDena());
// inheritance method
class SportStudent extends StudentData {
    constructor(fname, rollNo, course, sport) {
        // super means parent class ka constructor ko call karna
        super(fname, rollNo, course);
        this.sport = sport;
    }
    play() {
        return `${this.fname} is a good player of ${this.sport}`
    }
}
let std4 = new SportStudent("ali", 4, "web n dev", "cricket");
let std5 = new SportStudent("ahmed", 5, "web n dev", "football");
console.log(std4);
console.log(std4.play());
console.log(std5);
console.log(std5.play());
console.table(std4.present());