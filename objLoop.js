// her we are using for loop for object iteration
// function Sam(){
//     const Person={
//         name:'Mahesh',
//         age:26,
//         add:'Jagtial'
//     }
//     for(key in Person){
//         let value=key
//         let value1=Person[key]
//         console.log(`${value} -- ${value1}`)
//     }
// }
// Sam()

// worked for inheritance also
function Sam(){
    const Person={
        name:'Mahesh',
        age:26,
        add:'Jagtial'
    }
    const Student={
        Name:"Harish",
        add:"Jagtiall",
        place:"DSPT"
    }
    // inheriting
    Person.__proto__=Student
    for(key in Person){
        let value=key
        let value1=Person[key]
        console.log(`${value} -- ${value1}`)
    }
}
Sam()










