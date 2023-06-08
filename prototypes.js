const myheros = ["superman","batman","perman"] // this is array
const dcheros  =["akshay","aditya","asur"]
const heropower = {      //this is object
    superman:"hammer",  
    batman:"shield",
    perman:"sword",

    getbatmanpower:function(){  
        console.log(this.batman);
    }
}

const str = "akshay"

Object.prototype.hitesh = function(){       // when hitesh method was injucted in array and object its play c.log because in object
    console.log("akshay in all objects");   // and array object prototype is present
}

// console.log(myheros.hitesh());
// console.log(heropower.hitesh());
console.log(str.hitesh());

Array.prototype.heyhitesh = function(){   // when array prototype is ijected its log with array but not with object
    console.log("akshay you are the best");

}
   

console.log(myheros.heyhitesh()); // this will run because of array
// console.log(heropower.heyhitesh()); // this will throw error

//!inheritance !!!

let akshay = {
    bike:"royalenfield",
    mobile: "poco",
    laptop: "dell",
   
}

let aditya = {
    tshirt: "xoxox",
    pants: "lololo"
   
}
Object.setPrototypeOf(akshay,aditya) // now aditya can access the propertise of akshay 
                                     // with this syntax.
// console.log(aditya.laptop);
// console.log(aditya.bike);
// console.log(aditya.mobile);
console.log(akshay.tshirt);
console.log(akshay.pants);


String.prototype.truelength = function(){
       console.log(`ture length is ${this.trim().length}`);
        
}

"aditya       ".truelength()
"om       ".truelength()
"aksss    ".truelength()
 
// prototype -; when ever your create any object javascript engine automatically puts these hiddens propertise into an object and attacted it to a object