import React from "react";
import { useTimer } from "../../hooks/useTimer";

const TimerState = () => {
  const { globalState, handleState, handleReset } = useTimer();
  return (
    <div>
      <button onClick={() => handleState()}>
        {globalState.changeState ? `pause` : `play`}
      </button>

      <button onClick={() => handleReset()}>reset</button>
    </div>
  );
};

export default TimerState;
