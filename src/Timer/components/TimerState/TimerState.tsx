import { useTimer } from "../../hooks/useTimer";
import "./TimerState.css";

const TimerState = () => {
  const { globalState, handleState, handleReset } = useTimer();
  return (
    <div>
      <button className="btn" onClick={() => handleState()}>
        {globalState.changeState ? `pause` : `play`}
      </button>

      <button className="btn" onClick={() => handleReset()}>
        reset
      </button>
    </div>
  );
};

export default TimerState;
