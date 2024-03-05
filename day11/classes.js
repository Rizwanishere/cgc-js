// ---CLASSES--- //

class Mobile{
    constructor(color){
        this.brand="samsung";
        this.name="S21";
        this.color=color;   
    }
    call(phone){
        console.log("Calling: "+phone,"Its brand is: "+this.brand,"& color is: "+this.color);
    }
}

var m1 = new Mobile("black");
var m2 = new Mobile("White");

m1.call(9100612345);
m2.call(9908498765);

/* -------------------------------------------------------------------------------------- */


class absMobile{
    constructor(){
        // console.log("super constructor");
    }
    call(name){
        console.log("Calling...",name);
    }
}
class Mobile extends absMobile{
    constructor(brand,model,price){
        super();    //Must call super constructor in derived class before accessing 'this' or returning from derived constructor 
        this.brand=brand;
        this.model=model;
        this.price=price;
    }
    display(){
        console.log("Displaying...","Brand: "+this.brand,"Model: "+this.model,"Price: "+this.price);
    }
}

var rizwanPhone = new Mobile("Samsung","S21",34999);
var samadPhone = new Mobile("Motorola","G71",14999);

rizwanPhone.call("Rizwan");
rizwanPhone.display();
samadPhone.call("Samad");
samadPhone.display();

/* OUTPUT:
Calling... Rizwan
Displaying... Brand: Samsung Model: S21 Price: 34999
Calling... Samad
Displaying... Brand: Motorola Model: G71 Price: 14999
*/

