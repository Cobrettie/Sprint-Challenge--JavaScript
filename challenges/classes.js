// 1. Copy and paste your prototype in here and refactor into class syntax.



// function CuboidMaker(properties) {
//     this.length = properties.length;
//     this.width = properties.width;
//     this.height = properties.height;
// }

// CuboidMaker.prototype.volume = function () {
//     return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function () {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
// }



// ES6 Classes

class CuboidMaker {
    constructor(properties) {
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130



// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.



// STRETCH TASK


// Volume for cube = length of any one side ** 3
// Surface area for cube = 6a squared, where a is the length of any one side of the cube 

class CubeMaker extends CuboidMaker {
    constructor(properties) {
        super(properties);
    }

    volume() {
        return (this.length ** 3);
    }

    surfaceArea() {
        return (6 * this.length ** 2);
    }
}

console.log(cuboid.volume());
console.log(cuboid.surfaceArea());