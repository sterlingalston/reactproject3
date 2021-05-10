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


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [value, setValue] = useState(10)

  const hello = (who) => 
  {
    const handler = () => console.log('hello ', who)
 
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello('me')}>button 1</button>
      <button onClick={hello('you')}>button 2</button>
      <button onClick={hello('friend')}>button 3</button>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)