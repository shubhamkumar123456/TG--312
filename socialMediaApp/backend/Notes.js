// mongoose --> it is library of mongodb . with the help of mongoose you can create a structure in your database (create a Schema) and can do validations and also the are some inbuilt hooks



// Flow of project -->   start your project --> 


//1) create a package.json file  --> npm init -y
//2) download all required package example --> express , mongoose
//3) create a server using express
//4) connect server with database 
//5)create a collections or table  in models folder --> example UserModel, notesModel 
//6) create functions related to models --> Create CRUD functions
// example --> for userModel create --> registerFunction, loginFunct, updateUser,deleteUser
// 7) create api's for calling these functions in Routes folder example -->
    // router.post('/signup',registerFunction)
    // router.post('/login',loginFunct)

//8) import this routes file in server.js