function Person(name, age){
    this.name = name;
    this.age = age;
}

function car(make,model){
    this.make= make;
    this.model = model;
}

let mycar = new car("Tata","punch");
// console.log(mycar);

let myNewcar = new car("Toyota","fortuner");
// console.log(myNewcar);

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    }
}
let lemonTea = new Tea("lemon tea");
// console.log(lemonTea.describe());

function Animal(species){
    this.species = species;
}
Animal.prototype.sound= function(){
    return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("Cat");
console.log(cat.sound());