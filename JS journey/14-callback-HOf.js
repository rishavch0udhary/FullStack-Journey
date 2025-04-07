function callback(name){
    console.log(`Hello ${name}`);
}

function greetings(name,cb){
    greet = "Good Afternoon"
    cb(`${name}, ${greet}`)
}

greetings("John",callback)