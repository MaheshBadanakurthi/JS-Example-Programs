// As string starts and ends  with a char

function Startend(str){
    if(str.startsWith('M') && str.endsWith('h')){
        console.log("yes starts with M n ends with H")
    }
    else if(str.startsWith('M')){
        console.log("only starts with M ")

    }
    else if(str.endsWith('h')){
        console.log("only ends with H")

    }
    else
    console.log("neither M not H")


}
Startend("ahes")

//we also writwe like this
// if(str.startsWith('M/any letter') || str.startsWith('m/any lettter') && str.endsWith('h') || str.endsWith('H')){
//     console.log("yes starts with M n ends with H")
// }


