// closure 

let x = 1
function hello(){
    let x = 0
    console.log(x);
}
function bye(){
    let x =3;
    console.log(x);
}
function greet(){
    console.log(x);
}



// hello();
// bye();
// greet();
// console.log(x);

// closure example -:


// function name(){
//     let outerval = "akshay"
//     function innerfun(){
//         let innerval = "i the best"
//         console.log(outerval); // here the innefun can access the value of oustside the scope
//     }
//     console.log(innerval);
//     innerfun()
// }
//    name()


// second example of lexical scoping

const ourtervalue = 0;
function outerfunction(){
    const outerval = 1;
    console.log(outerval);

    function innerfunction(){

       const innerval = 2
        console.log(innerval,outerval,ourtervalue)


        function deepinnerfunction(){
            const deepval = 3
            console.log(deepval,innerval,outerval,ourtervalue);

            
        }
        deepinnerfunction()
            
    }
    innerfunction()
  
}
outerfunction()

//! note -:
// inner fucntion can access the value of outerfunction but outerfunction jo ek parent function bi hai vo cannot use the value of innerfucntion
// kid parents ya grandparents se icecream le skta hai pr grandparent ya parent kid se ice cream ni le skte
//this is lexical scoping 


//3rd ecample 

const errormessage = "error accur";
setTimeout(function(){
    console.log(errormessage);
},1000)


// 4th example

let pagecount = 0;

const items = [1,2,3,4,5,6,7,8,9,10]
items.forEach(function(el){
   pagecount++
   console.log(el);
})
console.log("pagecount",pagecount);