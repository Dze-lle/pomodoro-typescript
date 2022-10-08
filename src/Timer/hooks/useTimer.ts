import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

export const useTimer = () => {
  const {
    globalState,
    handleChange,
    handleState,
    handleStart,
    handleReset,
    count,
  } = useContext(TimerContext);

  return {
    globalState,
    handleChange,
    handleState,
    handleStart,
    handleReset,
    count,
  };
};
