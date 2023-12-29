
var fun = (no: number) =>{
    var sum : number= 0;
    var temp : number = no;
    while(no >= 1){
        var mult: number = 1;
        var digit: number = no % 10;
        var i : number = 0;
        for(i = 1;i <= 3;i++){
            mult= mult*digit; 
        }
        sum = sum + mult;
        no = Math.floor(no/10);
    }
    return (sum == temp);
}

console.log(fun(153));
console.log(fun(121));