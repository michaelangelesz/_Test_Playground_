import './App.css'
import { useState } from 'react'


function App() {
  const [btnColor, setBtnColor] = useState('red')
  const [inputDisabled, setInputDisabled] = useState(false)
  const newBtnColor = btnColor === 'red' ? 'blue' : 'red' 

  return (
    <div className="App">
      <h1>Test Playground</h1>
      <button 
      style={{backgroundColor: btnColor}}
      onClick={() => setBtnColor(newBtnColor)}
      disabled={inputDisabled}
      >
         Change to {newBtnColor}
      </button>
      <input
      type='checkbox'
      defaultChecked={inputDisabled}
      onChange={(e) => setInputDisabled(e.target.checked)}
      />
    </div>
  )
}

export default App