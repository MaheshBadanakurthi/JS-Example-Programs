// const person={
//     name:"Rani",
//     gender:"Female"
// }
// const Sam=person;
// // console.log(person,Sam)
// Sam.name='Ramya'// if it have   it changes  else assigned
// // when evver we change in Sam it applies to Person object.  \
// // To overcome this we us enext prog
// Sam.Married="No"
// console.log(person,Sam)



// cloning objec
// const Person={
//     Name:"mahesh",
//     gender:"Male"
    
// }
// const Sam2=Object.assign({},Person);
// Sam2.Name="Rakesh"
// console.log(Sam2)
// console.log(Person)

// using spread operator

const Person={
    Name:"mahesh",
    gender:"Male"
    
}
const Sam2={...Person }// its aspread operator but we have to use here Parent Object only
Sam2.Name="Rakesh"
console.log(Sam2)
console.log(Person)









