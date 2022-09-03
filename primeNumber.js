
function prime(value){
    primeList=[]
    
    for(let i=2;i<=value;i++){
        let num=123;
       for(let j=2;j<i;j++){
          if(i%j==0){
            num=12;
            break;
              
           }  
    }
    if(i>1 && num==123){
        primeList.push(i)
    }
  }
    console.log(`the prime list is ${primeList}  and he length of it is ${primeList.length}`);
}
prime(100);



// let num=2;
// if(num<=0){
//     console.log('enter a valid number')
// }
// else if(num>1){
//     let count=true;
//     for (i=2;i<num;i++){
//         if(num%i==0){
//             count=false;
//             console.log('it is not a prime number')
//             break;
            
//         }
//     }
//     if(count){
//         console.log('it is prime number')
//     }
    









