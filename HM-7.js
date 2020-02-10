https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
      return args.reduce((a, b) => a < b ? a : b);
  }
}

https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {

    return 2 * Math.PI * circle.radius;

}

https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

// Get Coding :)

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, (Shark.legs = 0), (Shark.species = "shark"), status);
  }
}

class Cat extends Animal {
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
  constructor(name, age, status) {
    super(name, age, (Cat.legs = 4), (Cat.species = "cat"), status);
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  // On your own now - you can do it :D
  constructor(name, age, status, master) {
    super(
      name,
      age,
      (Dog.legs = 4),
      (Dog.species = "dog"),
      status,
      (Dog.master = master)
    );
  }

  //Dog.master = master;
  greetMaster() {
    return `Hello ${Dog.master}`;
  }
}
