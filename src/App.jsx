import { useState } from 'react'
import './App.css'

function App() {
  const [converter, setConverter] = useState("celsius");
  const [temperature, setTemperature] = useState("");
  const [result, setResult] = useState(null);
  const [icon, setIcon] = useState("°C");
  const convertTemperature = (value) => {
    if (converter === "celsius") {
      setResult((value - 32) * 5 / 9);
      setIcon("°F");
    } 
    else {
      setResult((value * 9 / 5) + 32);
      setIcon("°C");
    }
  }
  return (
      <div>
<div>
  <h1 style={
    {
      marginBottom: '70px',
      fontFamily: 'arial san-serif',
      fontSize: '50px'
    }
  }>Temperature Converter</h1>
</div>
    
    <div style={{
      width: '400px',
      height: '200px',
      margin: '30px',
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      padding: '20px',
    }}>
      <div
      style={{
        margin: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
      >

     <input type="number" placeholder="Enter temperature..." 
     style={{
       width: '200px',
       height: '30px',
       padding: '3px 8px',
       borderRadius: '7px 0 0 7px'
       
      }}
      value={temperature}
      onChange={(e) => setTemperature(Number(e.target.value))}
      /> 
     <select name="converter" id="converter"
     style={{
       width: '50px',
       height: '39px',
       marginLeft: '0px',
       borderRadius: '0 7px 7px 0',
       fontSize: '18px',
       backgroundColor: '#f0f0f0',
       border: '1px solid #473a3af0',
       cursor: 'pointer',
      }}
      value={converter}
      onChange={(e) => setConverter(e.target.value)}
      >
     <option value="celsius">°C</option>
     <option value="fahrenheit">°F</option>
      </select>
    </div>
    <div>
      <button
      style={{
        backgroundColor: '#dddddd',
        border: '1px solid black',
        borderRadius: '7px',
        
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = "#0a4e1d"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "#dddddd"}
      onClick={() => convertTemperature(temperature)}
      >Convert</button>
    </div>
    <div>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '10px 0',
      }}>
        {result !== null && `${result.toFixed(2)} ${icon}`}
      </h2>
    </div>
    </div>
        </div>
  )
}

export default App
