// create a function which accept a number from user and prints fibnacci series till that number

function printFibonacci(limit: number): void{
    var no1: number = 0;
    var no2: number = 1;
    if(limit < 0){
        return;
    }
    if(limit == 0){
        console.log(0);
        return;
    }

    console.log(no1);
    console.log(no2);    
    if(limit == 1){
        return;
    }
    while(no2 < limit){ 
        var temp: number = no1;
        no1 = no2;
        no2 = no2 + temp;
        console.log(no2);
    }
}

printFibonacci(21);