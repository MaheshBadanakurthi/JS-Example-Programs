function factorial(num){
    fact=1;
    if(num<=1){
        console.log("the factorial is 1")
    }
    else if(num>1){
        
        for (i=1;i<=num;i++){
        fact=fact*i;
        }
    }
    console.log(`The factorial is ${fact}`)
}
factorial(7);



// without function
let num=5;
let x=1;
let value;
for(i=1;i<=num;i++){
    x=x*i
}
console.log(x)
