import logo from './logo.svg';
import {useState, useEffect} from "react"
import './App.css';

function App() {
  const [loading,setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [dollors,setDollors] = useState('')
  const [inverted,setInverted] = useState(true)

  const onChange = (event)=>{
    setDollors(event.target.value)
  }

  const onClick = (event) =>{
    setInverted((current) => !current)
  }

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>setCoins(data))
     setLoading(false)
  },[] )
  return ( //USD->BTC만들기 input만들어서
    <div className="App">
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) =>  
        <option>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price}</option>)}
      </select>
      <input value = {inverted? dollors : dollors*10 } type = "text" onChange = {onChange}>
      </input>
      <button onClick = {onClick}>button</button>
    </div>
  );
}

export default App;//
