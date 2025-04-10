// Parts of OOPs
// Constructions function
// Prototypes
// Closure
// Instances(new)/this

// function User() {
//     this.username = "DeathCode",
//       this.email = "dc@dc.com"
//       this.print = function () {
//         console.log(this.email, this.username);
//       };
//   }
// let user = new User()
// let user2 = new User()
// user2.email = "dc@dc.com"
// console.log(user)
// console.log(user2)






function User(username, email) {
    this.username = username,
      this.email = email,
      this.print = function () {
        console.log(this.email, this.username);
      };
  }
  
  let user = new User("DeathCode","dc@dc.com");
  let user2 = new User("DeathCode2","dc2@dc.com");
  // user2.email = "dc2@dc.com";
  console.log(user);
  console.log(user2);