//spread operator in array
/*let stdData = {
    fname:"Umra",
    lName:"Badar",
    email:"umra@gmail.com"
}
let classData ={
    course:"WMA",
    timing:"2pm-4pm",
    days:"MWF"
}
let enrolledStd = {...stdData,  tainer:"Umra Badar",...classData,}
console.log(enrolledStd);
console.log(stdData);*/
//spread operator in function call
 /*let arr = [1,2,3]
function sum(a,b,c){
    console.log(a+b+c);   
}
sum(...arr)
//spread operator in string
let str = "Hello"
let chars = [...str]
console.log(chars);
//spread operator in object
let stdData2 = {
    fname:"Umra",
    lName:"Badar",
    email:"umra@gmail.com"
}
// let updatedStud={ email:"umrabadar@gmail.com", ...stdData }
let updatedStud={ ...stdData2, email:"umrabadar@gmail.com" }
console.log(updatedStud);*/
//callback function
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye!");
}
greet("sara", sayGoodbye);
//callback function with setTimeout
function delayedGreet(name, delay){
    setTimeout(function(){
        console.log("Hello " + name);
    }, delay);
}
delayedGreet("sara", 2000);
 function calculate(x,y,cb){
    return cb(x,y)
}
// method 1
let add = calculate(4,6,function(num1,num2){
    return num1 + num2
})
console.log(add);

// method 2
let subtract = (x,y)=> x-y
let sub = calculate(5,2, subtract)
console.log(sub);

// method 3
function multiply(x,y){
    return x*y
}
let mult = calculate(4,3,multiply)
console.log(mult);


function step1(callback){
    setTimeout(()=>{
        console.log("step1");
        callback()  
    },5000)
}
function step2(callback){
    setTimeout(()=>{
        console.log("step2");
        callback()  
    },2000)
}
function step3(callback){
    setTimeout(()=>{
        console.log("step3");
        callback()  
    },4000)
}
function step4(callback){
    setTimeout(()=>{
        console.log("step4");
        callback()  
    },1500)
}
// step1()
// step2()
// step3()
// step4()

step1(()=>{
    step2(()=>{
        step3(()=>{
            step4(()=>{
                console.log("All steps done");
                
            })
        })
    })
})
