let car = {
    make: "Toyota",
    make : "fortuner",
    year: 2024,

    start: function(params){
      return `${this.make} car got started in ${this.year}`;
    }
}
// console.log(car.start());

function Person(name,age){
    this.name = name,
    this.age = age
}

let john = new Person("John",30)
// console.log(john.name);

function Animal(type){
    this.type = type;
}
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
};
let cat = new Animal("pussy")
// console.log(cat.speak());

Array.prototype.hitesh = function(){
    return `Custom method ${this}`;
};

let myArray = [1,2,3];
// console.log(myArray.hitesh());

class vehicle{
    constructor(make,model){
        this.make = make
        this.model = model
    }
        start(){
            return `${this.model} is a car from ${this.make}`;
        }
    }

    class Car extends vehicle{
        drive(){
            return `${this.make} : This is inheritance example `;
        }
    }

let myCar = new Car("Toyota","corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccount()
// console.log(account.getBalance());

// Abstraction

class CoffeMachine {
    start(){
        // call DB
        // filter value
        return `Starting the machine...`;
    }
    brewCoffee(){
      // complex calculation
      return `Brewing Coffee`; 
    }
    pressButton(){
        let msgone = this.start();
        let msgtwo = this.brewCoffee();
        return `${msgone} + ${msgtwo}`
    }
}
let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressButton());


//polymorphism

class Bird{
    fly(){
        return `Flying....`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly());
// console.log(penguin.fly());

// static method

class Calculator{
    static add(a,b){
        return a+b
    }
}

//let miniCalc = new Calculator();
// console.log(miniCalc.add(36,64)); 

// console.log(Calculator.add(36,64)); 

//getters and setters

class Employee {
#salary;
    constructor(name, salary){
                if (salary<0) {
                    throw new Error("Salary cannot be in negative");
                }
        this.name = name;
        this._salary = salary;
    }
    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if (value<0){
            console.error("Invalid Salary");
        }else{
this._salary = value;
        }
    }
}

let emp = new Employee("Alice", -50000);
// console.log(emp._salary);
