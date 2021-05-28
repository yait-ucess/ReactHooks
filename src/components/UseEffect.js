import React, {useState, useEffect} from 'react'

const UseEffect = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect invoked")
  }, [])

  return (
    <div>
      <button onClick={() => setCount(prevCount=>prevCount+1)}>Click {count} </button>
    </div>
  )
}

export default UseEffect
