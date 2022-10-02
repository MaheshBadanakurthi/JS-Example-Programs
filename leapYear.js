// checking given year is leap year or not
function Leapyear(num){
    if(num%4==0 && num%100 !=0 ||  num%400==0){
        console.log("its a leap year")
    }
    else
    console.log("not a leap")
}
Leapyear(1640)


