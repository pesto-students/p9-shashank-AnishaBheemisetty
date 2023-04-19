class Person {
  constructor() {}
  initialize(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return this.name + ", " + this.age + " years old.";
  }
}

class Student {
  constructor() {}
  learn(subject) {
    console.log(this.name + " just learned " + subject);
  }
}
Student.prototype = new Person();

const him = new Student();

him.initialize("John", 25);
him.learn("Inheritance");
