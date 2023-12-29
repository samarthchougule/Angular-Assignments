
class Arithmetic{
    public no1: number;
    public no2: number;
    
    constructor(val1: number, val2:number){
        this.no1 = val1;
        this.no2 = val2;
    }

    addition(): number{
        return this.no1 + this.no2;
    }

    subtraction(): number{
        return this.no1 - this.no2;
    }
    
    multiplication(): number{
        return this.no1 * this.no2;
    }

    division(): number{
        return this.no1 / this.no2;
    }
}

var obj1: Arithmetic = new Arithmetic(20,25);
console.log(obj1.addition());
console.log(obj1.subtraction());
console.log(obj1.multiplication());
console.log(obj1.division());

var obj2: Arithmetic = new Arithmetic(100,101);
console.log(obj2.addition());
console.log(obj2.subtraction());
console.log(obj2.multiplication());
console.log(obj2.division());

