function poly(num){
    let number=num;
    let rev=0
    while(num>0){
        n=num%10;
        rev=rev*10+n;
        num=Math.floor(num/10)
    }
    if(rev==number){
        console.log('given nujmber is polyndrome')
    }
    else  console.log('nooooooooooooooo given nujmber is not  polyndrome')

}
poly(12210)





// polyndrome for strings
// function polyn(str){
//     let x=str.toLowerCase();
//     let word=x.split('').reverse().join('');
//     console.log(word)
//     if(word==x){
//         console.log("string polyndrome")
//     }
//     else console.log("not polyn")

// }
// polyn("damad")


