import React from 'react'

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
      <div>
        <b>{users[0].username}</b><span> ( {users[0].email} )</span>
      </div>
      <div>
        <b>{users[1].username}</b><span> ( {users[1].email} )</span>
      </div>
      <div>
        <b>{users[2].username}</b><span> ( {users[2].email} )</span>
      </div>
    </>
  )
}

export default UserList

//반복요소가 많아서 X -> 컴포넌트 안에 또 컴포넌트 만들어줄꺼임 
