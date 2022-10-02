import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

export const useTimer = () => {
  const { globalState, handleChange, handleState, handleStart } =
    useContext(TimerContext);

  return {
    globalState,
    handleChange,
    handleState,
    handleStart,
  };
};
