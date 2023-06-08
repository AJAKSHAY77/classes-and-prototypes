class product{

    // property or datamember of object or prodcut

     
    #rating
    constructor(n,p,r){
        
        this.name =n;
        this.price = p;
        this.#rating = r;

    }

    static custom(){
        console.log("static method");
    }

    addtocart(){
        console.log("your item is added to cart",this.name,this.price,this.#rating);
    }

}

const iphone = new product("iphone",100000,10)
console.log(iphone);
iphone.addtocart()
// iphone.custom() //-> error
 //-> we cannot call static method or function with object
product.custom()




const tv = new product("tv",100000,5)
console.log(tv);
tv.addtocart()

const macbook = new product("macbook",200000,6)
console.log(macbook);
tv.addtocart()

// use of static method ---

// using #rating or #price we can make our datamember private it can not access out now 