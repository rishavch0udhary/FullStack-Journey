function Post({title,desc}){
    // let title= "react course"
    function randomInt(){
        return Math.round(Math.random()*100)
    }
    return(
    <>
    <div style={{display:"flex",flexDirection:"column",padding:"8px",margin:"8px",width:"250px",height:"350px",backgroundColor:"#f9f9f9"}}>
    <img src="https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg" alt="piiuyuigu" />
    <h2>{title}</h2>
    <p>{desc} and Post no. is {randomInt()}</p>
    </div>
    </>
    )
 }
export {
    Post
}