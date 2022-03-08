import React from 'react';
import './App.scss'
import Count from './components/Count';
//  import './App.scss';
// import Navbar from './components/Navbar';
// import Main from './components/Main';

function App() {
  const [initCount, setInitCount] = React.useState(0)

  function add() {
     setInitCount(prevCount => prevCount + 1)
  }

  function minus() {
    setInitCount(prevCount => prevCount - 1)
  }

  return (
    <div className="counter">
        <button onClick={minus} className="counter--minus">–</button>
        <Count number={initCount} />
        <button onClick={add} className="counter--plus">+</button>
    </div>
)
}

export default App;


//  <Navbar />
//  <Main />