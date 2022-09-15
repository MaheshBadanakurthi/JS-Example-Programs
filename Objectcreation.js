// One way to create a object
const Student={
    name:"Sandy",
    age:19,
    Hobbies:['cricket','kabaddi','running'],// Its a list
    // below is a function
    welcome:function(){
        console.log("welcome is called")
    },
    // below is nested object
    Marks:{
        Maths:87,
        Science:68,
        English:87
    }

}
// console.log(Student)
console.log(Student.name);
console.log(Student.Hobbies)//  calling all list items
console.log(Student.Hobbies[1])// accesing only specific item
console.log(Student.welcome)// its not the right way to call a function
Student.welcome()// calling a function
console.log(Student.Marks.English) // accesing the object values.

//another way to create a object     using new

const Student1= new Object({
    name:"Marcus",
    age:21,
    Hobbies:['cricket','kabaddi','running'],// Its a list
    // below is a function
    welcome:function(){
        console.log("welcome is called")
    },
    // below is nested object
    Marks:{
        Maths:87,
        Science:68,
        English:87
    }

});
// console.log(Student)
console.log(Student1.name);
console.log(Student1.Hobbies)//  calling all list items
console.log(Student1.Hobbies[1][2])// accesing only specific item
// console.log(Student1.welcome)// its not the right way to call a function
Student1.welcome()// calling a function
console.log(Student1.Marks.English) // accesing the object values.



// obj creation using  Constractor
function Student01(){
   this. name="Kristan";
    this.age=18;
  this.Hobbies=['vollyball','Badmitton','Athletics'];// Its a list
    // below is a function
    this.welcome=function(){
        console.log("welcome is called")
    };
    // below is nested object
    this.Marks={
        Maths:67,
        Science:98,
        English:77
    }

}
let Student2=new Student01()
// console.log(Student)
console.log(Student2.name);
console.log(Student2.Hobbies)//  calling all list items
console.log(Student2.Hobbies[1])// accesing only specific item
console.log(Student2.welcome)// its not the right way to call a function
Student2.welcome()// calling a function
console.log(Student2.Marks.English) // accesing the object values.