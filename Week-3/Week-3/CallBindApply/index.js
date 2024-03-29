// Bind:-

// .bind() method creates new function that when it is called  this keyword set to provided value.
// With a given sequesnce of arguments preceding  before the function is called .

// Example 1:-

function difference(a, b) {
  return this.a - this.b;
}

console.log(difference()); // will give output NAN as two undefined is equal to NAN

// differenceB is a different function

const differenceB = difference.bind({ a: 20, b: 10 });

console.log(differenceB()); //will give output as difference 10

console.log(difference === differenceB); // will give output false

const differenceC = differenceB.bind({ a: 40, b: 40 });

console.log(differenceC()); // will give output as difference 10

// because whenever we boind something it is permanently bound. You cannot rebound it again .

// Example 2:-

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

console.log(module.getX()); // will give output 42

// if we create a reference for this function

const fn = module.getX;
console.log(fn());
// fn becomes unbounded as it is executing global context right now as the global doesnot have undefined .

// We can execute it like this using .bind

// const fn=module.getX.bind(module); // getx function creates a copy of the module function using bind .

console.log(fn()); // 42 is the output

// Example 3:-

function product(a, b) {
  return a * b;
}

console.log(product(2, 10)); // 20

const double = product.bind(null, 5, 10);
console.log(double(2, 10)); // will give output 50 as 5 is bounded with a and 10 is bounded with b.

// Call :-

// .call method calls a function with a given this value and arguments provided individually .

// Example 1:-

function greet(name) {
  const reply = [
    name,
    this.animal,
    "typical sleep between",
    this.sleepDuration,
  ].join(" ");

  console.log(reply);
}

const cats = { animal: "cats", sleepDuration: "12 to 16 hours" };

const dogs = { animal: "dogs", sleepDuration: "5 to 6 hours" };

greet.call(cats, "anisha");
greet.call(dogs, "sravya");

// Apply :-

// .apply method calls a function with a given this value and arguments provided as an array .

const maxNumbers = [10, 5, 60, 2];

const max = Math.max.apply(null, maxNumbers);

console.log(max); // output is 60

const minNumbers = [10, 5, 60, 2];

const min = Math.min.apply(null, minNumbers);

console.log(min); // output is 2

// With call , you have to know arguments at compile time ,
//  will apply we can differ the decision at run time
