import { FC, useEffect, useState } from "react";
import { useTimer } from "../../hooks/useTimer";

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
    <div>
      <h2>{handleConvertTime(globalState.globalTime)}</h2>
    </div>
  );
};

export default TimerMain;
