// currently not working correctly

function VowelsCount(str){
    const VowelList=['a','e','i','o','u'];
    let  strList=str.split('')
    console.log(strList)

    let count=0;
    for(i=0;i<=strList.length;i++){
        for(j=0;j<=VowelList;j++){
            if(strList[i]==VowelList[j]){
                count+=1
            }
        }
    }
    console.log("your Vowel count is "+ count)
}
VowelsCount("Mahesh")





// using regEX
// function Vcount(str){
//     let result=str.match(/[aeiou]/gi);
//     console.log(result.length)
// }
// Vcount("mahesh Badanakurthi")


// const VowelList=['a','e','i','o','u'];
// function VList(str){
//     let count=0;
//     let Vowels=[]
//     let cons=[]
//     for(letter of str.toLowerCase()){
//         if(VowelList.includes(letter)){
//             Vowels.push(letter);
//         }
//         else cons.push(letter);
//     }
//     console.log(`vowels are ${Vowels} and consonents are ${cons}`)
// }
// VList('mahesh is not so special')


