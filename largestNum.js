let x=12;
let y=234;
let z=34;
 if(x>=y && x>=z){
    console.log('x is big');
    if(y<z){
        console.log('y is less')
    }
    else{
        console.log('z is less')
    }
 }

 else if(y>=x && y>=z){
    console.log('y is big')
    if(x<z){
        console.log('x is less')
    }
    else{
        console.log('z is less')
    }
 }
 else{
    console.log('z is big')
    if(x<y){
        console.log('x is less')
    }
    else{
        console.log('y is less')
    }
 }
