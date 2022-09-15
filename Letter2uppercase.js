// using repalce method
// function letter2upper(str){
//     let result=str.replace(str.charAt(0),str.charAt(0).toUpperCase())// for 1 letter to upper
//     let result2=result.replace(result.charAt(1),result.charAt(1).toUpperCase())// for 2 letters to upper
//     console.log(result)
//     console.log(result2)
// }
// letter2upper('bmahesh')

//another way
function str2Upper(str){
    let string=str.charAt(0).toUpperCase()+str.slice(1)
    console.log(string)
}
str2Upper('mahesh')


