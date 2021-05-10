import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

//const Display = ({ counter }) => <div>{counter}</div> -- does the same thing

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)