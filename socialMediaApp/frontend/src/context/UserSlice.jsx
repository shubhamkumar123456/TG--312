import React, { useState } from 'react'
import UserContext from './UserContext'

const UserSlice = (props) => {
    let token = localStorage.getItem('g6Social')

    const [userData, setuserData] = useState({
        token:token ? token : '',
        user:''
    });

   async function getUserData(){
        let res = await fetch('http://localhost:8090/users/loggedInUser',{
            method:'GET',
            headers:{
                'authorization': token
            }
        })

        let data = await res.json()  //  {user: {_id , name, email, password , profilePic..}}

        setuserData({...userData, user:data.user})  // {token , user}
    }
  return (
    <UserContext.Provider value={{getUserData, userData}}>
            {props.children}
    </UserContext.Provider>
  )
}

export default UserSlice
