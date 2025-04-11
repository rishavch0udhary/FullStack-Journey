
const colors = document.querySelector("#colors")

for(let i=0;i<colors.children.length;i++){
    colors.children[i].addEventListener('click',(ev)=>{
        document.body.style.backgroundColor = ev.target.id
    })
}
