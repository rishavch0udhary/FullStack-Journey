const user = {
    name: "death",
    name2: "death",
    name3: "death",
  };
  
  // console.log(Object.getOwnPropertyDescriptor(user,'name'))
  Object.defineProperty(user,'name',{
      writable:false,
      enumerable:false,
      configurable:false
  })
  user.name = "pop"
  // Math.PI = 234234
  // console.log(Object.getOwnPropertyDescriptor(Math,'PI'))
  // console.log(Object.keys(user))
  // console.log(user.name)
  Object.defineProperty(user,'name',{
      configurable:true
  })
  delete user.name
  
  console.log(user.name)