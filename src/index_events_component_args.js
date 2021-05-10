import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const pizza = "safsdfsadf"
const a = 2

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => () => {
    setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <Button onClick={setToValue(1000)}  text={pizza + a}/>
      <Button onClick={setToValue(0)}  text="reset"/>
      <Button onClick={setToValue(value + 1)}  text="increment"/>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)