import React from 'react'

const basic1 = (props) => {
  const clickHandler = () => {
    console.log("成功");
  };
  return (
    <>
      <button onClick={clickHandler}>Click</button>
      <h1>You are {props.name} </h1>
    </>
  )
}

export default basic1
