import { FC, useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";
import "./TimerMain.css";

const TimerMain: FC = () => {
  const { globalState, handleStart } = useTimer();

  useEffect(() => {
    if (globalState.changeState) {
      const timeout = setInterval(() => {
        handleStart();
      }, 1000);

      return () => clearInterval(timeout);
    }
  });

  const handleConvertTime = (value: number): string => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    return `${minutes > 9 ? minutes : `0${minutes}`}:${
      seconds > 9 ? seconds : `0${seconds}`
    }`;
  };

  return (
    <div className="clock">
      <h1>Pomodoro</h1>
      <span>{handleConvertTime(globalState.globalTime)}</span>
    </div>
  );
};

export default TimerMain;
