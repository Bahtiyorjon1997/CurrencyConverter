import React,  { useState } from 'react';
import ReactDOM from 'react-dom';
// import AddTos from './AddTos';

import App from './App';

const Input = () => {
  return <App />
}

const AddToForm = () => {}


const Form = () => { 
  const [inputList, setInputList] = useState([]);

  const handleOnClickButton = event => {
    setInputList(inputList.concat(<Input key={inputList.length}/>))
  }
  return (
    <div>
      <Input />
      {/* <button className="">+</button> */}
      {inputList}
      <button type="button" onClick={handleOnClickButton}>+</button>
      
    </div>
  )
}

ReactDOM.render(
  <>
    <Form />
  </>,
  document.getElementById('root'))