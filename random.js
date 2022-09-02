// Math.random() gives default 0 to 1 values like floor values only.
// function randomNumber(){
//     let num1=Math.random();
//     console.log(num1)

// }
// randomNumber()



// to get 1 to 10 values use     Math.random() * (highestNumber - lowestNumber) + lowestNumber
// function randomNummber(){
//     const num1=Math.random()*(6-1)+1;
//     const num2=Math.floor(num1);
//     console.log(num2);

//     const num3=Math.random()*(10-6)+6;
//     const num4=Math.floor(num3);
//     console.log(num4);

//     const num5=Math.random()*(20-15)+15;
//     const num6=Math.floor(num5);
//     console.log(num6);


//     // finding sum
//     let result = num2+num4+num6;
//     console.log(`the sum of all random numbers is  ${result}`);

//     //find square
//     let square1=num4*num4;
//     console.log(square1);

// }
// randomNummber();


// sum 121 using random
//  function Sum121(){
//     let value=0;
//     let randVal=[]
//     while(value<=121){
       
//         let randomValue=Math.floor(Math.random()*(8-2)+2);
//         let randomTofloor=Math.floor(randomValue);
//         value = value + randomTofloor;
//         randVal.push(randomTofloor);

//     }
//     console.log(`the sum is ${value} and the number of throws are ${randVal.length}`)
//     console.log(`the numbers are ${randVal}`)
//  }
//  Sum121();


let strings='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function anyString(value){
    let sLength=strings.length
    let stringValue=" ";// we have give it empty 
    for (let i=0;i<=value;i++){
        
        stringValue = stringValue + strings.charAt(Math.floor(Math.random()*(sLength-1)+1));
        //charAt takes index charecter so for index we are using 

    }
    console.log(`the string u r looking for `+ stringValue);
}
//setTimeout(anyString,4000)//  executing the function after 4 sec.
anyString(6);



/// random from array.
let listMine=[3245,2345,546765,7689,234];
let lenOf=listMine.length
let listResult=listMine[(Math.floor(Math.random()*(lenOf-1)+1))];
console.log(listResult);









