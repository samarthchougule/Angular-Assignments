// create a function which accepts number from user and prints its factors

function printFactors(no: number): void{
    var i : number = 0;
    for(i = 1;i <= (no/2);i++){
        if(no%i == 0){
            console.log(i);
        }
    }
}

printFactors(20);