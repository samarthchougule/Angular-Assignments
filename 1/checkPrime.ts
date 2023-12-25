// create a function which accepts a number from user and returns true of number is prime

function checkPrime(no: number):boolean{
    var i: number = 0;
    for(i = 2;i <= (no/2);i++){
        if((no%i) == 0){
            return false;
        }
    }
    return true;
}

if(checkPrime(11)){
    console.log("It is a prime number");
}
else{
    console.log("It is not a prime number");
}


if(checkPrime(2)){
    console.log("It is a prime number");
}
else{
    console.log("It is not a prime number");
}

if(checkPrime(10)){
    console.log("It is a prime number");
}
else{
    console.log("It is not a prime number");
}