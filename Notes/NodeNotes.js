// Node JS --> it is a runtime environment for Js ( runs javascript code outside the browser) with the help of V8 engine

// node Js is a single threaded language it have only one call stack

// Node Js uses Libuv library(written in c language) that provides the Event loop and handles asynchronous I/O operation. it manage a thread poop for task that the OS can not do asynchronously


// import and export in node js --> 
// a) old style --> module.exports for exporting a file , require() is used to import a file

// b) new style (Es6) --> simple import and export


// destructure-->
// const {x , obj} = require('./A');


// Destructuring  --> 
// let obj = {
//     name:"one",
//     age:34,
//     email:"one@gmail.com"
// }

// let a = obj.name
// let b = obj.age
// let c = obj.email

// let {name, email, age} = obj

// console.log(name)
// console.log(email)
// console.log(age)


// let arr = [10, 20, 30];
// let b = arr ;

// b.push(9)
// b.push(19)

// console.log(b)  // [10, 20, 30 ,9 ,19]
// console.log(arr) // [10, 20, 30]
// console.log(b)


// Spread Operator --> used copy the element of array or object into new array or object
// let arr = [10, 20, 30];
// let ans = [...arr]
// ans.pop()
// ans.pop()

// console.log(ans)
// console.log(arr)



//Type of Modules -->
// a) Core module -->  modules that are present inside node js the do not need to install
// examples -->fs module , http , __dirname , __dirname etc

// b)   Local module--> these are user created modules(functions)

// a)   Third party  module--> need to install from outside of the node
// example --> express , nodemon , etc



// middleware is a function that have the access of requesting to an object , responding to an object, they can also modify the request and response. they can also used between the routes. it have three arguments request , response and next

// example-->
// app.use((req, res, next)=>{
    //     console.log("i am middleware")
    //     // res.send("i am middleware")
    //     next()
    // })

// https://github.com/shubhamkumar123456/TG--312.git




