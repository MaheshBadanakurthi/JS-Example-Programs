let date=new Date()
console.log(date)
// console.log(Date.now())
console.log(date.getFullYear()) //2022
console.log(date.getDay())
// console.log(date.getHours())

// console.log(date.setFullYear(2020))

// chnging the format of date
let day=date.getDay();
let month=date.getMonth();
let year=date.getFullYear();
console.log(day+"-"+month+"-"+year)
console.log(day+"@"+month+"@"+year)
console.log(day+"/"+month+"/"+year)
// below is used to print current date and time
const time = date.toLocaleTimeString();// for current time
console.log(time)
console.log(date.getHours()+"-"+date.getMinutes()+"-"+date.getMilliseconds())

let x=new Date("Sep 16,2022 10:10:24").getTime();
console.log(new Date().getTime())//not working