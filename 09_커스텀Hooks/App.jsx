// 커스텀 hooks - 반복되는 로직을 쉽게 재사용
// 이름은 앞에 use 키워드로 시작, 그 안에 함수 작성

import React, { useReducer, useCallback, useRef, useMemo }  from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs' ;    //만들어놓은 커스텀hooks useInputs을 불러옴


const initialState = {   //inputs,  users배열 초기화  
  //inputs객체 필요X
  users : [     
    { id:1, 
      username:'blueDragon', 
      email:'blueDragon@naver.com',
      active: true 
    },
    { id:2, 
      username:'sisisaa', 
      email:'sisisaa007@daum.net',
      active: false 
    },
    { id:3, 
      username:'d3456dddd', 
      email:'d3456@gmail.com',
      active: false  
    },
  ]
}

//reducer함수 정의 - 상태를 업데이트 하는 함수
function reducer(state, action){
  switch (action.type){
    //CHANGE_INPUT 삭제
    case 'CREATE_USER':
      return {
        //inputs:initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state, users: state.users.map(user => 
          user.id === action.id ? {...user, active: !user.active } : user )
      }
    case 'REMOVE_USER':
      return {
        ...state, users: state.users.filter( user => user.id !== action.id)
      }
    default:
      throw new Error('액션 없음!');

  }
}

//active된 아이템 숫자를 세주는 함수
function countActiveUsers(users){
  //console.log('active 유저 수를 세는 중');
  return users.filter(user => user.active).length;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //state-현재상태, dispatch-액션을 발생시키는 함수(전달해주는역할)
  //파라메터 (함수, 초기값)
  const { users } = state;  //비구조화 할당, users배열만 추출
  //const { username, email} = state.inputs   -삭제
  const nextId = useRef(4); 

  //useInputs 사용을 위한 세팅
  const [ form, onChange, reset] = useInputs({
    username: "",
    email: ""
  });
  const { username, email } = form;


//onChange 함수 삭제

  const onCreate = useCallback(()=> {
    dispatch({
      type:'CREATE_USER',      
      user:{
        id:nextId.current,
        username,
        email
      }
    })
    reset();  //setInputs에서 만든 초기화 함수 사용
    nextId.current +=1;
  },[username,email,reset])

  const count = useMemo(()=>countActiveUsers(users),[users])
  //active가 적용된 user의 수를 나타내는 변수count
  //useMemo- users배열이 바뀔때만 작동

  const onToggle = useCallback((id) =>{
    dispatch({
      type:'TOGGLE_USER', 
      id  
    })
  },[])

  const onRemove = useCallback((id) =>{
    dispatch({
      type:'REMOVE_USER', 
      id  
    })
  },[])

  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} 
      /><br/>
      <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>  <br />
      <div>Active 상태의 사용자 수 : {count} </div>
    </>
  );
}

export default App;
