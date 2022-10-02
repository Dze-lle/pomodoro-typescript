import React from "react";
import { useTimer } from "../../hooks/useTimer";

const TimerState = () => {
  const { globalState, handleState } = useTimer();
  return (
    <div>
      <button onClick={() => handleState()}>
        {globalState.changeState ? `pause` : `play`}
      </button>

      <button>reset</button>
    </div>
  );
};

export default TimerState;
