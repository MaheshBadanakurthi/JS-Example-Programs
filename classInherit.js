// here we are comparing two strings

class Anyname{
    constructor(name,place,place2){
// here it is not necessary to write same as keys . it works based on the order preference
        this.name=name;// here name should be matched with constractor key words
        this.place=place;
        this.place2=place2;
        
        }
        
    }
    // below is inheritance
    class secondClass extends Anyname{
        constructor(name,place,place2,gender){
            super(name,place,place2,gender); // by using super we calling that parent values inside to the child
            this.gender=gender;
        }

    }
    const obj1=new secondClass('Mahesh','Hyd','Vizag','Male');
    console.log(obj1);
    