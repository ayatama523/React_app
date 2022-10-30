import React, {userState, useState} from "react";

export const TextInput = () => {
  const [name,setName] = useState('')

  const handleName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  return (
    <input
      onChange={(event) => handleName(event)}
      type={'text'}
      value={name} 
    />
  );
} ;