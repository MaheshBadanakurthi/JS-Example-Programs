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
    console.log(`the factorial is ${fact}`)
}
factorial(7);

