import { useState, useCallback } from "react";

//해당 input에서 관리할 초기값을 가져옴
function useInputs(initialForm){
  const [form, setForm ] =useState(initialForm)

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm( form => ({ ...form, [name]:value }))
  },[]) 

  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  //form을 초기화하는 함수

  return [form, onChange, reset];

}

export default useInputs;