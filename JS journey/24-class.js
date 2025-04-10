
class User {
    total = 55
    constructor(username,email){
        this.username = username
        this.email = email
    }
    print(){
        console.log(this)
    }
}

const u1 = new User("death","dc@dc.com")
// const u2 = new User("code","code@dc.com")

class Programmer extends User {
    constructor(username,email,lang){
        super(username,email)
        this.lang = lang
    }
    print(){
        console.log("PROGRAMMER")
        super.print()
    }
    hello(){
        console.log("Programmer Hello")
    }
}
class Dev extends Programmer{
    constructor(username,email,lang){
        super(username,email,lang)
    }
}

const p1 = new Programmer("death","dc@dc.com","JS")

// console.log(p1 instanceof Object)
Object.prototype.hello = ()=>{console.log("hello")}

// p1.hello()
p1.print()