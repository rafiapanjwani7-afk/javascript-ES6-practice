/*-----------arrow function--------*/
let greet = () => {
    console.log("hello");

 }
 greet()
/*-------------Closure------------*/
let fontmin = document.getElementById("fontmin");
let fontmax = document.getElementById("fontmax");
let fontlarge = document.getElementById("fontlarge");

function clickHandlers(size , color , bgcolor) {
    return function () {
        let para = document.getElementById("para");

        para.style.fontSize = `${size}px`;
        para.style.color = `${color}`;
        document.body.style.backgroundColor = `${bgcolor}`;
    };
}

fontmin.onclick = clickHandlers(23 , "brown" ,"beige");
fontmax.onclick = clickHandlers(30, "purple", "lavender");
fontlarge.onclick = clickHandlers(35, "white", "black");