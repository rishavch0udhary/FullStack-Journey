// function CreateTroop(name,target){
//     this.name = name
//     this.target = target
// }

// CreateTroop.prototype.attack = function(){
//     console.log(`${this.name} is Attacking`)
// }

// const barb = new CreateTroop("barbarian",'ground')
// const archer = new CreateTroop("archer",'both')

// console.log(archer)
// barb.attack()
// archer.attack()

// function fun(){
//     let x = 7
//     return x
// }

// fun.y = 55

// console.log(fun)

// let name = "Hello_Death_Code,"
// let sub = "subscribe_jarur_krna,"

// String.prototype.removeUnderscore = function(){
//     return this.replaceAll('_',' ')
// } 

// // console.log(name.removeUnderscore())
// // console.log(sub.removeUnderscore())


// Object.prototype.deathcode=function(){
//     console.log("Hello Dosto, Subscribe krdo")
// }

// "".deathcode()
// barb.deathcode()
// // [3,4].deathcode()
// new Number(4).deathcode()

function User(name){
    this.name = name
    this.total = 56
    this.print = function(){
        console.log(this)
    }
}
function Teacher(name,subject){
    User.call(this,name)
    this.subject = subject
}

const t = new Teacher("DeathCode","JS")
console.log(t.print())