"use strict"

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}

class CircleCount extends Circle {
    constructor(length) {
        super();
        this.length = length;
    }

    get getradius() {
        return this.length / 2*Math.PI;
    }

    set setRadius(radius){
        this.radius = radius;
    }

    get getdiametr() {
        return this.radius * 2;
    }

}

let circleCount = new CircleCount(20);

circleCount.setRadius = 10;

console.log(circleCount.getradius);
console.log(circleCount.getdiametr);
console.log(circleCount);

class Square extends Circle {
    constructor(radius) {
        super();
    }

    getArea(){
        return (this.radius + this.radius * Math.PI).toFixed(2);
    }

    getLength(){
        return ((2 * Math.PI) * this.radius).toFixed(2);
    }

  }

let square = new Square() // не зрозуміла, чому якщо пишу let square = new Square(12), то this.radius в консолі undefigned,а  getLength() результат NAN
square.radius = 50;

console.log(square);
console.log(square.getLength());
console.log(square.getArea());



