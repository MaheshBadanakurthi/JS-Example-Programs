
// // below if we use numbers it  gives error
// const [mahi1,nani2,rani3]=['mahesh','nani','rani','ramya']
// console.log(mahi1)

// const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

// console.log(tomato); // '🍅'
// console.log(mushroom); // '🍄'
// console.log(rest)


// /// Array concatination
// let x=[345,56,657]
// let y=['mahi','nani','rani','ramya']
// let z=['ramesh','naresh','sai']
// let sam=x.concat(y)// for single cancatination
// let Sam=x.concat(y,z)// for multiple
// console.log(sam)
// console.log(Sam)
// // to join array with something
// let Join=y.join('')
// let joiN=y.join('@')
// console.log(joiN)
// console.log(Join)

// // array fill method
// console.log(x.fill("xyz"))// new array will come with all xyz
// console.log(x.fill("xyz",1))
// console.log(x.fill("xyz",1,4))


// const colors = ['red', 'blue', 'green','yellow','white','black'];
// console.log(colors.fill('pink', 1))// from 1st position to  rest will come pink
// console.log(colors.fill('pink', 1,3))


// // array include method
// let value=[4,'mahi','nani','rani','ramya']
// // console.log(value.includes('mahi')) // gives true
// // console.log(value.includes('mAhi')) // gives  false
// // console.log(value.includes('mahi2')) // gives false

// // reverse of an array
// console.log(value.reverse())




// // for index value 
// console.log(value.indexOf('mahi'))
// console.log(value.indexOf('ramya'))
// console.log(value.indexOf('rani'))

// if(value.includes('mahi')=='mahi'){
//     console.log("its true")
// }
// else
// console.log("false")
// if(value.includes('mahi')){
//     console.log("working")
// }
// // below is ternary operator

// console.log(value.includes('mahi')?'done':'not Done')

// // sorting of an array
// const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1]
// console.log(numbers.sort())
// console.log( numbers.sort((a,b)=>a-b))// to sort the numbers we pas a function in sort 
// // above function is for asending order  to get desending order we use instead of a-b use b-a



const numbers = [23, 5, 100,  9, 13, 37, 10, 1]

console.log( numbers.sort((a,b)=>a-b))
console.log("the 2nd largest number is"+numbers[numbers.length-2])

console.log(numbers.length-2)


