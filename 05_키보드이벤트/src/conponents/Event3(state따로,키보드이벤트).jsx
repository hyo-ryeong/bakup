//키보드 이벤트

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

  const onEnterPress = (e) => {   //엔터키 눌렀을때 온클릭 함수 발생
    if( e.key == 'Enter') { 
      onClick(); 
    }
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
        onKeyPress ={onEnterPress} //키보드 클릭했을때 함수 발생
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
}


