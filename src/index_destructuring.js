import React from 'react'
import ReactDOM from 'react-dom'

//destructuring method 3
//const Hello = (props) => {

const Hello = ({name, age}) => {
 /* destructuring method 1
 // const name = props.name
 // const age = props.age
*/

//destructuring method 2
 // const {name, age} = props

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
