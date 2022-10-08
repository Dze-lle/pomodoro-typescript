import { FC, useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";
import { handleConvertTime } from "../../utils/formatTimer";
import "./TimerMain.css";

const TimerMain: FC = () => {
  const { globalState, handleStart, count } = useTimer();

  useEffect(() => {
    if (globalState.changeState) {
      const timeout = setInterval(() => {
        handleStart();
      }, 1000);

      return () => clearInterval(timeout);
    }
  });

  return (
    <div className="clock">
      <h1>Pomodoro</h1>
      <span>{handleConvertTime(globalState.globalTime)}</span>
      <strong>{count === 0 ? `session` : `break`}</strong>
    </div>
  );
};

export default TimerMain;
