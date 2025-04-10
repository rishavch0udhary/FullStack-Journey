
class Course{
    #name = "sldkfj"
    constructor(name,teacher,videos){
        this.#name = name
        this.teacher = teacher,
        this.videos = videos
    }
    print(){
        console.log(this)
    }
    get name(){
        return this.#name.toUpperCase()
    }
    set name(i){
        this.#name = this.#name
    }
}

const js = new Course("JS Course","DeathCode",40)
js.name = "lskdjf"
// console.log(js.name)
// js.print()


function User(name,username){
    this._name = name
    this._username = username
    Object.defineProperty(this,'name',{
        get: function(){
            return this._name.toUpperCase()
        },
        set:function(value){
            this._name = value
        }
    })
}

const u = new User("death","deathcode")
console.log(u.name)