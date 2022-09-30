// using repalce method
// function letter2upper(str){
//     let result=str.replace(str.charAt(0),str.charAt(0).toUpperCase())// for 1 letter to upper
//     let result2=result.replace(result.charAt(1),result.charAt(1).toUpperCase())// for 2 letters to upper
//     console.log(result)
//     console.log(result2)
// }
// letter2upper('bmahesh')

//another way
// function str2Upper(str){
//     let string=str.charAt(0).toUpperCase()+str.slice(1)// here slice(1) gives array from 1st elements  if we give 2 it gives from 2nd element
//     console.log(string)
// }
// str2Upper('mahesh')

function string(str){
    let x=str.split('')
    let y=x[0].toUpperCase();
    console.log(y)

}
const nam='mahesh'
string(nam)





