// Golden Ratio means  high value/low value ==high+low/high value

function GoldenRatio(num1,num2){
    let addition=num1+num2;
    if(num1>num2){
        let value1= parseInt( num1%num2);

        let value2=parseInt( addition%num1);
        if(value1==value2){
            console.log("give are Golden Ration numbers")
        }
        else{
            console.log("Not goldePairs")
        }
    }
    else{
        let value3= parseInt( num2%num1);

        let value4=parseInt( addition%num2);
        if(value3==value4){
            console.log("give are Golden Ration numbers")
        }
        else{
            console.log("Not goldePairs")
        }

    }
}
GoldenRatio(1,4)