const  graphql = require('graphql');
const bcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "abc123@"

const {GraphQLList , GraphQLSchema ,GraphQLString, GraphQLObjectType}  = graphql

const  User = require('../models/userModel');

const UserType = new GraphQLObjectType({
    name:'User',
    fields:{
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        password:{type:GraphQLString},
        bio:{type:GraphQLString},
        profilePic:{type:GraphQLString},
        coverPic:{type:GraphQLString},   
    }
})

const authType = new GraphQLObjectType({
    name:'Auth',
    fields:{
        token:{type:GraphQLString},
        user:{type:UserType}
    }
})

const Query = new GraphQLObjectType({
    
})

const Mutation =  new GraphQLObjectType({
    name:'mutation',
    fields:{
        registerUser:{
            type:GraphQLString,
            args:{
                name:{type:GraphQLString},
                email:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            async resolve(parent, args){
                let {name, email, password} = args;
                let checkUser = await User.findOne({email});
                if(checkUser){
                    return 'user already registered'
                }
                else{
                    const hash = await bcrypt.hash(password, 10);
                    await User.create({name, email, password:hash});
                    return 'user registered successfully'
                }
            }

        },

        loginUser:{
                type:authType,
                args:{
                    email:{type:GraphQLString},
                    password:{type:GraphQLString},
                },
                async resolve(parent, args){
                    const {email, password} = args;
                    let existingUser = await User.findOne({email});
                    if(!existingUser){
                        throw new Error ('user not found');
                    }
                    else{
                        let checkPassword = await bcrypt.compare(password, existingUser.password);

                        if(checkPassword){
                            let token = jwt.sign({id:existingUser._id}, jwtSecret);
                            return {user:existingUser, token}
                        }
                        else{
                            throw new Error ('password not match');
                        }
                    }
                }
        },
        updateUser:{

        },
        deleteUser:{

        },
    }
})



module.exports = new GraphQLSchema({
    query:'',
    mutation:Mutation
})
