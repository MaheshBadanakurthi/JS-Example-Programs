
const VowelList=['a','e','i','o','u'];
function VList(str){
   
    let Vowels=[]
    let cons=[]
    for(letter of str.toLowerCase()){
        if(VowelList.includes(letter)){
            Vowels.push(letter);
        }
        else cons.push(letter);
    }
    console.log(`vowels are ${Vowels} count is ${Vowels.length}`)
    console.log( ` consonents are ${cons} count ${cons.length}`)
}
VList('mahesh is so special')
