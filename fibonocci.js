// let range=10;
// let a=0,b=1,c;
// for (i=0;i<=5;i++){
//     console.log(a);
//     c=a+b;
//     a=b;
//     b=c;
    
// }


// using function
let n1=0;
let n2=1;
let n3;
let arr=[]


function fibonocci(num){
    if(num<=0){
        console.log("enter more than 1");
    }
    else if(num==1){
        console.log(" 0 ")
    }
    else{
      for(i=0;i<=num;i++){
         arr.push(n1)
         n3=n1+n2;
         n1=n2;
         n2=n3;


    }
}
console.log(arr)
    
}
fibonocci(12)