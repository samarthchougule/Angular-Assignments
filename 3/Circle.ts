class Circle{

    public radius: number;
    private PI: number = 3.14

    constructor(no: number){
        this.radius = no;
    }

    public areaOfCircle(): number{
        return (this.PI * this.radius * this.radius);
    }
}

var obj1: Circle = new Circle(100);
var obj2: Circle = new Circle(200);

console.log(obj1.areaOfCircle());
console.log(obj2.areaOfCircle());