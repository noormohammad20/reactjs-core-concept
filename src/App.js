import logo from './logo.svg'
import './App.css'

const number = 5555
const singer = { name: 'dr mahfuz', job: 'singer' }
const singer2 = { name: 'eva rahman', job: 'singer' }

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Person name="rubel" naika="mousimi"></Person>
      <Person name="bapparaj" naika="cheka"></Person>
      <Person name="kuber" naika="kopila"></Person>

      <p>rock mama! react mama!</p>
      <Friend movie="singham" phone="02523523"></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  )
}

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>naika: {props.naika}</p>
    </div>
  )
}

function Friend(props) {
  return (
    <div className='container'>
      <h3>jaydeb gan</h3>
      <p>{props.phone}</p>
      <p>{props.movie}</p>
    </div>

  )
}

export default App
