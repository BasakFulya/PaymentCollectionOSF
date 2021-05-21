import { useState } from 'react';
import './App.css';
import lipstick from './assets/lipstick.jpg';
import StripeContainer from './components/StripeContainer';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>The Make Up Store</h1>
      {showItem ? <StripeContainer/> : <> <h3>$10.00</h3> <img src={lipstick} alt="Lipstick" />
      <button onClick={() => setShowItem(true)}>Purchase lipstick</button></>}
    </div>
  );
}

export default App;
