import React, {useState} from 'react'

const Basic1 = (props) => {
  const clickHandler = () => {
    console.log("成功");
  };

  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => {setCount(prevCount=>prevCount+1); setCount(prevCount=>prevCount+1);}}>Count {count} </button>
      <h1>You are {props.name} </h1>
    </>
  )
}

export default Basic1
