
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
console.log(Student1.Hobbies)
delete Student1.Hobbies;
console.log(Student1.Hobbies)
console.log(Student1.name)
delete Student1.name;
console.log(Student1.name)