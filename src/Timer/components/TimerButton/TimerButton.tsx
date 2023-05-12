import { useTimer } from "../../hooks/useTimer";
import "./TimerButton.css";

const TimerState = () => {
  const { globalState, handleState, handleReset } = useTimer();

  return (
    <div>
      <button className="btn" onClick={() => handleState()}>
        {globalState.changeState ? `pause` : `start`}
      </button>

      <button className="btn" onClick={() => handleReset()}>
        reset
      </button>
    </div>
  );
};

export default TimerState;
