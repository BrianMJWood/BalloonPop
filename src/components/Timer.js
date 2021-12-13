import React from "react";

const Timer = (props) => {

    const [countDown, setCountDown] = React.useState(0);
    const [runTimer, setRunTimer] = React.useState(false);

    React.useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(5);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
    }, [runTimer]);

    React.useEffect(() => {
        if (countDown < 0 && runTimer) {
        setRunTimer(false);
        setCountDown(0);
        props.toggleTimer(false);
        } else if (countDown > 0 && runTimer) {
            props.toggleTimer(true);
        }
    }, [countDown, runTimer]);

  const togglerTimer = () => setRunTimer((timerRunning) => !timerRunning);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  return (
    <div className="App">
      <div>
        Time: {minutes}:{seconds}
      </div>
        {!runTimer ?      <button type="button" onClick={togglerTimer}>
        {runTimer ? "Stop" : "Start"}
      </button> : null}

    </div>
  );
}

export default Timer;