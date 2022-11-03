//input 각각 onChange 함수를 따로 만듦

import React from 'react'

export default function Event() {


  const onChangeUsername = () => { console.log('유저네임에 온체이지 일어남'); }
  const onChangeMessage = () => { console.log('메세지에 온체이지 일어남'); }
  const onClick = () => { alert('클릭했어요!!'); }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input 
        type='text' 
        name='username' 
        placeholder='유저명' 
        value='' 
        onChange={onChangeUsername}
        />
      <input 
        type='text' 
        name='message' 
        placeholder='아무거나 입력해보세요' 
        value='' 
        onChange={onChangeMessage}
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
}


