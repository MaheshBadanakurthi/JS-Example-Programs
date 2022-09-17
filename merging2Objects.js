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
const Student2={
    Name:"Madona",
    age:22,

    // below is a function
    greeting:function(){
        console.log("welcome Madona")
    },
    // below is nested object
    Grades:{
        Evironmental:98,
        Psychology:88
    }
}
// merging above two objects
const Combine=Object.assign(Student,Student2)
// or  we can use spread operator
// const Combine1={...Student,...Student2}
Combine.new="Nothing";
// console.log(Combine)

const Sam=Student;
Sam.onething="Something";
console.log(Sam)
console.log(Student)




