import './App.css'
import logo from '/images/kofcolombia-logo-2.png'
import Cards from './components/Cards'

function App() {

  return (
    <div className="App">
      <div className="header">
        <img src='/images/kofxv-logo.png' alt="logo" />  
        <h1>proximos eventos:</h1>
      </div>
      <Cards />
      <div className="navbar">
        <img className='nav-logo' src={logo} alt="logo" />
        <p>Bogota - Colombia</p>
        <p>2022 - Daniel Sandoval</p>
      </div>
    </div>
  )
}

export default App
