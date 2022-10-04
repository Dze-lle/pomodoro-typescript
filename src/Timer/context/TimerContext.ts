import { ChangeEvent, createContext } from "react";
import { IGlobalState } from "../interfaces";

export type TimeContextProps = {
  globalState: IGlobalState;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleState: () => void;
  handleStart: () => void;
  handleReset: () => void;
};

export const TimerContext = createContext<TimeContextProps>(
  {} as TimeContextProps
);
