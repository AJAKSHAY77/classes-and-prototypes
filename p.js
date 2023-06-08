class product{

    //propertise
     #price
    constructor(n,p,r){
      this.name = n;
      this.#price = p;
      this.rating = r; 

    }

    static  custom(){
        console.log("hello objects");
    }
    
  get pricegetter(){
    console.log(this.#price);
  }
  set pricesetter(p){
    if(p<0) return;
    this.#price = p

  }
    


    addtocart(){
        console.log("added to cart",this.name,this.#price,this.rating);
    }
}

const tv = new product("sonia bravia",1000000,5)
product.custom()
tv.pricesetter = 20000000000000000
tv.pricegetter


console.log(tv);


tv.addtocart()






