// function replacing(str){
//     let value=str.replace('eager','badly')// we do not print str cos we are replacing  n saving in value so we have to call value only.
//     let va1=value.replace('Am','Mahesh')// this time data is in value not str so we have to use value and do operation
//     console.log(va1)
// }
// let myString="Am eager to waiting for my job"
// replacing(myString)


function replay(str1){
    let value1=str1.replace('A','B')// we do not print str cos we are replacing  n saving in value so we have to call value only.
    let val2=value1.replace('ea','Ea')// this time data is in value not str so we have to use value and do operation
    console.log(val2)
}
let myString1="Am eager to waiting for my job"
replay(myString1)



function replay01(str2){
    let value5=str2.replace('Am','B')// we can replace 1 letter with 1 letter   n 1 letter with 1 or more or a word also
    let val03=value5.replace('eager','Ea') // here eager is replacing with Ea only
    console.log(val03)
}
let myString001="Am eager to waiting for my job"
replay01(myString001)