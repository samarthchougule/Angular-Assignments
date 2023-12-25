// create function to return maximum of three numbers

function maximum(no1: number, no2: number, no3: number) : number{

    if((no1 > no2) && (no1 > no3)){
        return no1;
    }
    else if((no2 > no1) && (no2 > no3)){
        return no2;
    }
    else{
        return no3;
    }
}

console.log(maximum(1,2,3));
console.log(maximum(51,21,11));
console.log(maximum(101,151,121));

