// let num=153;
// x=num;
// let tagetNumber=0;
// while(num>0){
//     let  = num%10;
//     let rem=firstNumber*firstNumber*firstNumber;
//     tagetNumber+=rem;
//     num=Math.floor(num/10);

// }
// console.log(tagetNumber);
// if(tagetNumber == x){
//     console.log(`this  is  armstrong`);
// }
// else{
//     console.log(`this  is  not  armstrong`);

// }
// console.log(isNaN(num));
// console.log(isNaN(tagetNumber));


// below is setting a range for getting arm strong  but it failed 
for(i=4;i<=500;i++){
    let val=i.toString().length;
    let temp=i;
    let sum=0;
    while(temp>0){
        let num1=i%10;
        sum=sum+num1**val;
        temp=Math.floor(temp/10);
    }
    if(sum ==i){
        console.log(i)
    }
}















