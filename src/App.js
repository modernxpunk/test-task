import './reset.css'
import './index.css'
import { useState } from 'react';
import Logs from './components/Logs';
import Game from './components/Game';

function App() {
  const [hoverCells, setHoverCells] = useState({})
  const [selectLen, setSelectedLen] = useState("")

  return (
    <div className="wrapper">
      <div className='app'>
        <Game
          selectLen={selectLen}
          hoverCells={hoverCells}
          setHoverCells={setHoverCells}
          setSelectedLen={setSelectedLen}
        />
        <Logs hoverCells={hoverCells} />
      </div>
    </div>
  );
}

export default App;
