class complexnumber{
   #real
   #img
  constructor(r,i){
    this.#real =r;
    this.#img = i;

  }

  display(){
    console.log(this.#real, "+ i" ,this.#img);
  }

  get real(){
    return this.#real
  }

  get img(){
    return this.#img
  }

  addcomplexnumber(c){
   this.#real += c.real;
   this.#img += c.img

  }


}

const c = new complexnumber(5,7)
c.display()
const c2  = new complexnumber(10,5)
c.addcomplexnumber(c2)
c.display()
