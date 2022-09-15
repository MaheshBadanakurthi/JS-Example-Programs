let string1="defbacihg"
let pattern=/\w/gi;
let str1=string1.match(pattern)
// console.log(str1)
let string1Sorted=str1.sort();
// console.log(string1Sorted);
let str1Result=string1Sorted.join('')
console.log(str1Result);

let string2='defbacihg'
let pattern2=/\w/gi;
let str2=string2.match(pattern2);
let str2result=str2.sort().join('')
console.log(str2result)
if(str1Result==str2result){
    console.log('brooo its working ')
}
else console.log('noooo its not working')