import logo from './logo.svg'
import './App.css'

const number = 5555
const singers = [{ name: 'dr mahfuz', job: 'singer' },
{ name: 'eva rahman', job: 'singer' },
{ name: 'dr mahfuz', job: 'singer' },
{ name: 'eva rahman', job: 'singer' }]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['rubel', 'bapparaz', 'kuber', 'jashim', 'salmansha', 'riyaj', 'razzak']
  return (
    <div className="App">
      {/* {
        nayoks.map(nayok => <li>{nayok}</li>)

      }
      {nayoks.map(nayok => <Person name={nayok}></Person>)} */}

      {singers.map(singer => <Person name={singer.name}></Person>)}
      {/* <Person name={nayoks[0]} naika="mousimi"></Person>
      <Person name={nayoks[1]} naika="cheka"></Person>
      <Person name={nayoks[2]} naika="kopila"></Person> */}

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
