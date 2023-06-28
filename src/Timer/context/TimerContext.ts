import { ChangeEvent, createContext } from 'react';
import { GlobalState } from '../interfaces';

export type TimeContextProps = {
  globalState: GlobalState;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleState: () => void;
  handleStart: () => void;
  handleReset: () => void;
  count: number;
};

export const TimerContext = createContext<TimeContextProps>(
  {} as TimeContextProps
);
