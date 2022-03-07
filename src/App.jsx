import './App.css'
import logo from '/images/kofcolombia-logo.png'
import Cards from './components/Cards'

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <img className='nav-logo' src={logo} alt="logo" />
        {/* <h1>TORNEOS</h1> */}
      </div>
      <Cards />
    </div>
  )
}

export default App
