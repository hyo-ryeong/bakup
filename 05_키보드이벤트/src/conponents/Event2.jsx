//input 각각 onChange 함수를 따로 만듦
//버튼 클릭하면 경고창

import React, { useState } from 'react'

export default function Event() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');


  const onChangeUsername = (e) => { setUsername(e.target.value) }
  const onChangeMessage = (e) => { setMessage(e.target.value); }
  const onClick = () => { 
    alert(username + ': '+ message); 
    setUsername('');
    setMessage('');
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input 
        type='text' 
        name='username' 
        placeholder='유저명' 
        value={username} 
        onChange={onChangeUsername}
        />
      <input 
        type='text' 
        name='message' 
        placeholder='아무거나 입력해보세요' 
        value={message} 
        onChange={onChangeMessage}
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
}


