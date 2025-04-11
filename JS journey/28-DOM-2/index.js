function addFruit(name){
    const fruits = document.getElementById("fruits")
    // fruits.innerHTML += `<li>${name}</li>` 
    const li = document.createElement('li')
    li.setAttribute("id","fruit")
    const textNode = document.createTextNode(name)
    li.appendChild(textNode)
    fruits.appendChild(li)
    // console.log(fruits.innerHTML)
}


addFruit("Strawberry")
addFruit("Blackberry")

changeFruitsColor("yellow")

function changeFruitsColor (color){
    // const fruits = document.querySelector("#fruits")
    // for(let i=0;i<fruits.children.length;i++){
        //     fruits.children[i].style.color = color
        // }
        const fruits = document.querySelectorAll("#fruit")
        fruits.forEach((ele)=>{
            ele.style.color = color
    })
}

const lastFruit = document.querySelector("ul li:last-child")
lastFruit.remove()

const fruit = document.querySelector("ul li:nth-child(2)")
const li = document.createElement('li')
li.appendChild(document.createTextNode("Blackberry"))
fruit.replaceWith(li)
console.log(fruit.textContent)

