let city =["karachi","lahore","hyderabad","faisalabad","lahore","lahore"];
let words =new Set(city);
console.log(words);
let uniqueCities = [...new Set(city)];
console.log(uniqueCities);
for(let word of words){
    // console.log(word);
    words.add("islamabad");
    console.log(words);
}
//has method
console.log(words.has("karachi"));
console.log(words.has("peshawar"));//return boolean value
//delete method
words.delete("islamabad");
console.log(words);
//size method
console.log(words.size);
//clear method
words.clear();
console.log(words);


/*map methods*/
let map = new Map();
//set method
map.set("name","john");
map.set("age",30);
map.set("city","karachi");
 console.log(map);
 //get method
 console.log(map.get("name"));
 //has method
console.log(map.has("age"));
//delete method
map.delete("city");
 console.log(map);
