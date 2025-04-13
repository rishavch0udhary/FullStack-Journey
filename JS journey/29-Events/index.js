

function mangoClick(){
    console.log("Clicked")
 } 
 
 // document.querySelector('#fruit').onclick = mangoClick
 
 const ul = document.getElementById("fruits")
 const fruits = document.querySelectorAll("#fruit")
 
 ul.addEventListener("click",function(ev){
     console.log("Parent")
     ev.stopPropagation()
 },true)
 fruits.forEach(function(fruit){
     fruit.addEventListener('click',function(ev){
         console.log(ev.target.innerText)
         // console.log(this.innerText)
         ev.stopPropagation()
     },)
 })



 ye sirf falltu line hai