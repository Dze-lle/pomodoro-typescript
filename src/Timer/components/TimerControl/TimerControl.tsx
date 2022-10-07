import { ChangeEvent, useState } from "react";
import { useTimer } from "../../hooks/useTimer";
import { IGlobalState } from "../../interfaces";

const TimerControl = () => {
  const { globalState, handleChange } = useTimer();

  return (
    <>
      <p>Sessions Length : {globalState.session}</p>
      <input
        type="range"
        value={globalState.session}
        min="1"
        max="60"
        name="session"
        onChange={(e) => handleChange(e)}
      />

      <p>Break Length: {globalState.break}</p>
      <input
        value={globalState.break}
        type="range"
        min="1"
        max="30"
        name="break"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default TimerControl;
