import { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { GlobalState } from '../interfaces';
import { TimerContext } from './TimerContext';
import { TimerReducer } from './TimerReducer';

export const INITIAL_STATE: GlobalState = {
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
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch({ type: 'UPDATE_EVENT', payload: globalState.session * 60 });
  }, [globalState.session]);

  useEffect(() => {
    if (count > 1) {
      dispatch({ type: 'RESET_TIMER' });
      setCount(0);
    }
  }, [count]);

  const handleStart = (): void => {
    dispatch({ type: 'START_TIMER', payload: globalState.globalTime - 1 });

    if (globalState.globalTime <= 0) {
      setCount((prev) => prev + 1);
      dispatch({ type: 'START_TIMER', payload: globalState.break * 60 - 1 });
    }
  };

  const handleState = (): void => {
    dispatch({ type: 'CHANGE_STATE', payload: !globalState.changeState });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE_EVENT', payload: { name, value } });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_TIMER' });
  };

  return (
    <TimerContext.Provider
      value={{
        globalState,
        handleState,
        handleChange,
        handleStart,
        handleReset,
        count,
      }}>
      {children}
    </TimerContext.Provider>
  );
};
