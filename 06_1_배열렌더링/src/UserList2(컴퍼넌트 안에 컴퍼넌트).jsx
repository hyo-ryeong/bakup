//컴포넌트 안에 또 컴포넌트

import React from 'react'

 //또다른 컴퍼넌트 추가
const Item = ({ user }) => {    
  return (
    <div>
      <b>{user.username}</b><span>({user.email})</span>
    </div>
  )
}


const UserList = () => {
  const users =[
    { id:1, 
      username:'blueDragon', 
      email:'blueDragon@naver.com' 
    },
    { id:2, 
      username:'sisisaa', 
      email:'sisisaa007@daum.net' 
    },
    { id:3, 
      username:'d3456dddd', 
      email:'d3456@gmail.com' 
    },
  ]

  return (
    <>
      <Item user={users[0]}/>
      <Item user={users[1]}/>
      <Item user={users[2]}/>
    </> 
  )
}

export default UserList


