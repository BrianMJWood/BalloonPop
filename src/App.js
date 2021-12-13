import { useState } from 'react';

import Balloon from './components/Balloon';
import Score from './components/Score';
import Timer from './components/Timer';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [bonusWindow, setBonusWindow] = useState(false);

  const balloonPopped = () => {
    setBonusWindow(true);
    setTimeout(function() {
      setBonusWindow(false);
    }, 700);
    
    setScore(score === 0 ? 10 : bonusWindow ? score + 25 : score + 10);
  }

  const toggleTimer = (running) => {
    setTimerRunning(running);

    if (!running) {
      if (score > highScore) {
        setHighScore(score);
      }

      setScore(0);
    }
  }

  return (
    <div className="App">
      <Score score={score} highScore={highScore} />
      <Timer toggleTimer={toggleTimer} />
      {timerRunning ?       
        <div className="balloon-holder">
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
          <Balloon updateParent={balloonPopped} />
        </div>
      : null}
    </div>
  );
}

export default App;
