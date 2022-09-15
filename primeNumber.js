
// function prime(value){
//     primeList=[]
    
//     for(let i=2;i<=value;i++){
//         let num=true;
//        for(let j=2;j<i;j++){
//           if(i%j==0){
//             num=false;
//             break;
              
//            }  
//     }
//     if(i>1 && num==true){
//         primeList.push(i)
//     }
//   }
//     console.log(`the prime list is ${primeList}  and he length of it is ${primeList.length}`);
// }
// prime(10);



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
    



let num=12;
for(i=1;i<=12;i++){
  let x=1;
  for(j=2;j<i;j++){
    if(i%j==0){
      x=23;
      break;
    }
  
  }
  if(i>1 &&  x==1){
    console.log(i)
  }

    
}





