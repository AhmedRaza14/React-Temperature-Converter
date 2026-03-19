import { useState } from 'react'
import './App.css'

function App() {

  const [converter, setConverter] = useState("celsius");
  const [history, setHistory] = useState([])
  const [temperature, setTemperature] = useState("");
  const [result, setResult] = useState(null);
  const [icon, setIcon] = useState("°C");
  const [showHistory, setShowHistory] = useState(false)
  
  
  const convertTemperature = (value) => {
    
    let calculatedResult;
    let resultIcon;
    if (value === "") {
      alert('there is no input')
    }
    else{
  const num = Number(value);

  if (converter === "celsius") {
    calculatedResult = (num * 9 / 5) + 32;
    resultIcon = "°F";
  } else {
    calculatedResult = (num - 32) * 5 / 9;
    resultIcon = "°C";
  }
  
  setResult(calculatedResult);
  setIcon(resultIcon);
  
  const newRead = {
    temperature: num,
    inputicon : (converter === "celsius") ? "°C" : "°F",
    result: calculatedResult,
    icon: resultIcon,
  };
  
  setHistory([...history, newRead]);
  setTemperature("");
};
}

  const viewHistory = () => {
    if(!showHistory)
    {
      setShowHistory(true)
    }
      else{
        setShowHistory(false)
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
      minHeight: '300px',
      maxHeight: '600px',
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
      onChange={(e) => setTemperature(e.target.value)}
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
        backgroundColor: 'rgb(19, 67, 223)',
        border: '1px solid rgb(20, 64, 208)',
        marginTop: '15px',
        color: 'white',
        fontSize: '16px',
        borderRadius: '7px',
        
      }}
      onMouseEnter={(e) => {
        e.target.style.opacity = "0.7";
        e.target.style.border = "1px solid rgb(20, 64, 208)";
        }}
      onMouseLeave={(e) => {
        e.target.style.opacity = "1";
        e.target.style.border = "none";
        }}
      onClick={() => convertTemperature(temperature)}
      >Convert</button>

              <div>
                <h2 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: '10px 0',
                }}>
                  {result !== null && `${result.toFixed(2)} ${icon}`}
                </h2>
              </div>
      <button
            style={{
        backgroundColor: 'rgb(11, 128, 13)',
        border: '1px solid rgb(11, 128, 13)',
        marginTop: '15px',
        color: 'white',
        fontSize: '16px',
        borderRadius: '7px',
      }}
      onMouseEnter={(e) => {
        e.target.style.opacity = "0.7";
        e.target.style.border = "1px solid rgb(11, 128, 13)";
        }}
      onMouseLeave={(e) => {
        e.target.style.opacity = "1";
        e.target.style.border = "none";
        }}
            onClick={viewHistory}
          >
            View History
          </button>

    </div>

      <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            padding: '20px',
            // backgroundColor: '#dddddd',
            // border: '1px solid #ccc',
              
              fontSize: '17px',
            }}
        >
          {showHistory && history.map((item, index) => (

            <div key={index}
            style={{
              backgroundColor: '#dddddd',
              width: '100%',              
              padding: '7px',
              justifySelf: 'start',
              alignSelf: 'start' 
              // paddingLeft: '15px'
            }}
            >
               {index + 1}: {item.temperature} {item.inputicon} → {item.result.toFixed(2)} {item.icon}
            </div>
          ))}

        </div>



    </div>
        </div>
  )
}

export default App
