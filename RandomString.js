// getting Random string based the given length

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function string(num){
    let word='';
    let charLength=characters.length
    for (i=0;i<num;i++){
        let str=characters.charAt(Math.floor(Math.random()*charLength));
        word=word+str;
    }
    console.log(word)
}
string(3)


