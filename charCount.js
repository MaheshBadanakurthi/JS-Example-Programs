// count of a single letter 
function Charcount(str,letter){
    let Str=str.toLowerCase();// for  accurate occrences  cas JS is Casesensitive  
    // console.log(Str) // for checking
    let count=0;
    for(i=0;i<Str.length;i++){
        if(letter==Str.charAt(i)){
            count+=1
        }
    }
    console.log(`letter ${letter} occurense count ${count}` )
}
Charcount('Mahesh','h')


// below is by using Regex 
function charCount(str,letter){
    let String=str.toLowerCase();
    let pattern= /\w/gi;
    let results=String.match(pattern);
    // console.log(results)
    let count=0;
    for(i=0;i<=String.length;i++){
        if(letter==String[i]){
            count+=1;
        }

    }
    console.log(`occurense of ${letter} is ${count}`)
}
charCount("Maaaaaahesh is awoesome for a reason",'a')



//
function Char(str,char){
    let Str=str.toLowerCase();
    let count=0;
    for (let i=0;i<=Str.length;i++){
       if(char==Str.charAt(i)){
          count+=1;
       }
    }
    console.log(count)

}
Char(" Mahesh badanakurthi ",'h')




