class Circle{

    public radius: number;
    public PI: number = 3.14

    constructor(no: number){
        this.radius = no;
    }

    public areaOfCircle(): number{
        return (this.PI * this.radius * this.radius);
    }
}

class CircleX extends Circle{

    constructor(no: number){
        super(no);
    }

    public circumference():number{
        return (2 * this.PI * this.radius);
    }
}

var obj1: CircleX = new CircleX(10);
var obj2: CircleX = new CircleX(20);

console.log(obj1.areaOfCircle());
console.log(obj1.circumference());

console.log(obj2.areaOfCircle());
console.log(obj2.circumference());