// classes = classes are the blueprint
//ojects = objects are the products (ex.iphone) and products  have two things
// 1) propertise ex. price,ratings,description
//2)behavious ex.buynow,addtocart, savetobookmark etc

//so classes provide the blueprints to create objects 
//classes helps us to create similar types of objects or we can say  products 

//lets say i have made the page for iphone 11 and now for iphone 12 i will use the same class or blueprint of iphone 11 and made another product or make iphone 12
//classes helps us to make several diffrent types of ojects or products in much less type and also reduce the  code

class product{
    //propertise or datamember
  
   constructor(a,b,c){
        this.name = a;
        this.price = b;   //this is a keyword which refers to calling context
        this.rating = c   //  so new product() is a calling context so this is used 
       // return 10  ( constructor only return non primitive datatypes )
    //{a:1,b:2} { this will return}
    }                      //here more is down to know!!
                        
    //beaviour
    buynow() {
      
        console.log("buyed",this.name,this.price,this.rating);
    }
}

const iphone= new product("iphone11",1000000,5) //new  -> creates a empty plain object
// in the above piece of code we are calling a contructor method 
// when we use new product(class name)() this calls the contructor automatically 

console.log(iphone);
// iphone.buynow()


// since new creates empty object ok now new product()is calling contructor and this keyword refers to calling context so this.name = a, makes {name:a} 
 //*for ex = const t = {}
          //t.name = akshay,   // output = name:akshay,
                               //          id:101
          //t.id = 101 
   
          
 //notes = return concept from destructor
 // if we return primitive datatype dest.will not return anything
 //if we return obj then it will return  it but it will not return our product object 
 // there can be only one contructor in class in javascript         