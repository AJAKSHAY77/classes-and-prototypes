class complexnumber{
    #real;
    #img;
    constructor(r,i){
        this.#real = r;
        this.#img = i;
  }

get real(){
    return this.#real  // 5
}

get img(){
    return this.#img //7
}
  addcomplexnumber(e){
    this.#real *= e.real  //5 // 5*10
    this.#img *= e.img


  }


    display(){
        console.log(this.#real,"+ i",this.#img);
    }
}

const c = new complexnumber(5,7)
c.display()

const c2 = new complexnumber(10,7)
c.addcomplexnumber(c2)
c.display()

const c3 = new complexnumber(20,100)
c.addcomplexnumber(c3)
c.display()
