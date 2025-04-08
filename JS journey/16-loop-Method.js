// foreach, map , filter , reduce

//-------------for each-------------
let arr1 = [1,2,3,4,5,6,7]
// arr1.forEach((item,i)=>{
//     console.log(item,i);   
// })

//---------------map----------------
// let arr2 = []

// arr1.forEach((item)=>{
//     arr2.push(item*2)
// })
// console.log(arr2);

//in arrow function inside the curly bresis we also need to return, but not need in others

// let arr2 = arr1.map((item)=>{
//     return item*2
// })
// console.log(arr2);

// function myMap(arr=[],cb=()=>{}){
//     let newArr = []
//     arr.forEach((item)=>{
//         newArr.push(cb(item))
//     })
//     return newArr
// }

// let arr3 = myMap(arr1,(item)=>item*2)
// console.log(arr3);

//------------filter----------------

// console.log(arr1.filter((item)=>{
//     if(item%2==0){
//         return true
//     }
//     return false
// }));

//----------Reduce----------------

// EX 1

// arr1 = [1,2,3,4]
// console.log(arr1.reduce((accumulator,item)=>{
//     return accumulator+item
// },0));

// EX 2

// const fruits = ["apple","banana","apple","orange","banana","apple"]

// let f = fruits.reduce((accumulator,item) =>{
//     accumulator[item] = (accumulator[item]||0)+1;
//     return accumulator
// },{})
// console.log(f);
