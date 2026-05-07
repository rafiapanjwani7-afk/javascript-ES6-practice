 /*module export/ import method */
 // named export
//  import { products as product , sum, sub, multiply, divide } from "./product.js";
// console.log(product);
// console.log(sum(3,5));
// console.log(sub(7,5));
// console.log(divide(15,5));
// console.log(multiply(3,5));

/* default export method */
import obj from "./product.js";
console.log(obj.sum(2,3));
console.log(obj.sub(2,3));
console.log(obj.multiply(2,3));
console.log(obj.divide(2,3));

/*closure*/
function greetring(){
    let message = "hello"// yeah  lexical scope khalata hai
    function inner(){
        console.log(message);
        let message2 = "hi"
    }
//     function inner2(){
// console.log(message2); // Error

//     } 
// sibling functions ek dusre ki variables access nahi kar sakte
    // sirf parent scope ki values access hoti hain
    inner()
    // inner2()
}
greetring();

