var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}

var him = new Student();

him.initialize("John", 25);
him.learn("Inheritance");