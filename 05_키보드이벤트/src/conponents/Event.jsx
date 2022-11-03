//input의 갯수가 많아지너가 할때 useState를 하나로

import React, { useState } from 'react'

export default function Event() {
  const [form, setForm] = useState({ username:'', message:''}); 
  const {username, message} = form; //비구조할당을 통해서 추출


  const onChange = (e) => { 
    const nextForm ={ ...form, [e.target.name]:e.target.value }

    setForm(nextForm)
  }
  
  const onClick = () => { 
    alert(username + ': '+ message); 
    setForm({ username:'', message:'' })
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
        onChange={onChange}
        />
      <input 
        type='text' 
        name='message' 
        placeholder='아무거나 입력해보세요' 
        value={message} 
        onChange={onChange}
        onKeyPress ={onEnterPress} //키보드 클릭했을때 함수 발생
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
}


