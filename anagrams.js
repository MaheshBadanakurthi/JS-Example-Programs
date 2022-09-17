// function Anagrams(string1,string2){
//     let str1=string1.split('').sort().join('').toUpperCase();
//     let str2=string2.split('').sort().join('').toUpperCase();
//     console.log(str1);
//     console.log(str2);
//     if(str1===str2){
//         console.log('anagram')
//     }
//     else{
//         console.log('not anagram')
//     }
    
// }
// Anagrams("mahesh",'hesham')



// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1 !== len2){
//        console.log('Invalid Input');
//        return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     console.log(str1)
//     console.log(str2)
//     if(str1 === str2){
//        console.log("True");
//     } else { 
//        console.log("False");
//     }
//  }
//  checkStringsAnagram("indian","ndiani")

// not working if do like this 
let Sam=["mahesh"]
// let y=x.split('  ')
let z=Sam.sort().join(' ');  
console.log(z);