import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

promise.then(response => {
  console.log(response)
})

//better syntax below
axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  console.log(notes)
})