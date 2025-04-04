function outer(){
    let counter = 5
    return function(){
        counter++
        return counter
    };
}

let increment = outer()
console.log(increment());
