// here we converting Object ot string
const Sam={
    City:'Hyderabad',
    place:'Madhapoor',
    add:"Hostel",
    hostel:"mB ",
    details:['Cgcs',123,234,6]
}
let result=JSON.stringify(Sam);
console.log(result)
console.log(typeof result) // string
console.log(Sam.City)
console.log(Sam.details[2]);
console.log(Sam['hostel'])
