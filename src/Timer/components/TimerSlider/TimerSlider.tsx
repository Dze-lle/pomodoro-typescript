import { useTimer } from "../../hooks/useTimer";
import "./TimerSlider.css";

const TimerSlider = () => {
  const { globalState, handleChange } = useTimer();

  return (
    <div className="container-control">
      <div className="container-input">
        <p>Session Length</p>
        <div className="input-group">
          <input
            type="range"
            value={globalState.session}
            min="1"
            max="60"
            name="session"
            onChange={(e) => handleChange(e)}
            disabled={globalState.changeState ? true : false}
            style={{
              backgroundSize: `${Math.round(
                (globalState.session / 60) * 100
              )}% 100%`,
            }}
          />
          <output>{globalState.session}</output>
        </div>
      </div>

      <div className="container-input">
        <p>Break Length</p>
        <div className="input-group">
          <input
            value={globalState.break}
            type="range"
            min="1"
            max="30"
            name="break"
            onChange={(e) => handleChange(e)}
            disabled={globalState.changeState ? true : false}
            style={{
              backgroundSize: `${Math.round(
                (globalState.break / 30) * 100
              )}% 100%`,
            }}
          />
          <output>{globalState.break}</output>
        </div>
      </div>
    </div>
  );
};

export default TimerSlider;
