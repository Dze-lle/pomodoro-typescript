import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { IGlobalState } from "../interfaces";
import { TimerContext } from "./TimerContext";
import { TimerReducer } from "./TimerReducer";

export const INITIAL_STATE: IGlobalState = {
  session: 25,
  break: 5,
  changeState: false,
  globalTime: 1500,
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const TimerProvider = ({ children }: props) => {
  const [globalState, dispatch] = useReducer(TimerReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMER", payload: globalState.session * 60 });
  }, [globalState.session]);

  const handleStart = (): void => {
    dispatch({ type: "START_TIMER", payload: globalState.globalTime - 1 });

    if (globalState.globalTime < 0) {
      return;
    }
  };

  const handleState = (): void => {
    dispatch({ type: "CHANGE_STATE", payload: !globalState.changeState });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_EVENT", payload: { name, value } });
  };

  return (
    <TimerContext.Provider
      value={{ globalState, handleState, handleChange, handleStart }}
    >
      {children}
    </TimerContext.Provider>
  );
};
