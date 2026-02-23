// SQl --> (structured query language)  --> is used to store manage relational database , ulinke mongodb, Sql stores data in tables (rows and columns)

// Queries and commands -->

// 1) Database Commands --> 
    // a) view all database --> show databases;
    // b) switch to any existing database --> use databaseName;
    // c) create a new database  --> create database databaseName ;
    
// 2) create a table in sql --> 
        // create table tableName(
        //     id Int primary key,
        //     name varchar(),
        //     email varchar(),
        //     age int
        // )

    //  example -->  first give column name and then datatype name
    // create table users(
// 	id int auto_increment primary key,
//     name varchar(250) not null,
//     email varchar(100) not null unique,
//     age int,
//     city varchar(50),
//     create_at timestamp default current_timestamp
// );   

// Note  --> 
// id unique for every user
// auto_increment --> automatically increases
// primary key --> identify each row


// 3) Insert Data in a table -->
    // a) insert single data -->
        // insert into tableName(column name) values('', '', '')
    // example -->
    //  insert into  users (name, email, age , city)
    //  values('jack', 'jack@gmail.com', 47, 'kanpur') 

    // b) insert multiple data --> 
        //  insert into  users (name, email, age , city)
        // values
        // ('one', 'one@gmail.com', 47, 'xyz'),
        // ('two', 'two@gmail.com', 47, 'unnao');

//4) get Data present inside table --> 
    // a)get All data --> 
        // select * from tableName;
        // example -->  select * from users;
    
    // b) read or get specific column data --> 
        // select columnName1, columnName2 from tableName

    // c) get Data using condition  -->  use where keyword -->
    
        // select * from users where email = "anyEmail"
        // example --> select * from users where age > 30
        // example --> select * from users where age between 20 and 40;


//5) update table -->
    // a) add new column in table --> alter table tableName add columnName dataType;
    // b) remove a column in table --> alter table tableName drop columnName;
    // c) modify a column --> alter table modify columnName dataType
    // example -->alter table users modify age varChar(30)

//6)Update Data -->  update tableName SET columnName = "" where columnName = "";
// example -->
// update users SET name = "undertaker" where email = "two@gmail.com"

//9) delete Data --> Delete from tableName where columnName = "";
// example--> delete from users where email = "one@gmail.com"

//10) delete Table  -->  drop table tableName ;
//11) delete database  --> drop database databaseName;



