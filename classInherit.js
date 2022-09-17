class Anyname{
    constructor(nam,place,place2){

        this.nam=nam;
        this.place=place;
        this.place2=place2;
        
        }
        
    }
    class secondClass extends Anyname{
        constructor(name,place,place2,gender){
            super(name,place,place2,gender);
            this.gender=gender;
        }

    }
    const obj1=new secondClass('Mahesh','Hyd','Vizag','Male');
    console.log(obj1);
