// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Hello, Death Code");
//         resolve()
//     },2000)
// })
// p.then(()=>{
//     console.log("After Promise Resolved")
// })

// new Promise((resolve,reject)=>{
//     //db call
//     let flag = false
//     if(flag){
//         setTimeout(()=>{
//             resolve()
//         },2000)
//     }else{
//         setTimeout(()=>{
//             reject()
//         },2000)
//     }
// }).then(()=>{
//     console.log("Promise Resolved")
// }).catch(()=>{
//     console.log("Promise Rejected")
// })

const p2 = new Promise((resolve,reject)=>{
    let flag = false
    if(flag){
        setTimeout(()=>{
            resolve({name:"T-Shirt",color:"Red"})
        },1000)
    }else{
        setTimeout(()=>{
            reject("Something went wrong")
        },1000)
    }
})
// p2.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

//-------------async-await------------------

async function handlePromise() {
    try {
        let data = await p2
        console.log(data);
        
    } catch (error) {
        console.log(error)
    }
}
handlePromise()