import TimerControl from "./components/TimerControl/TimerControl";
import TimerMain from "./components/TimerMain/TimerMain";
import TimerState from "./components/TimerState/TimerState";

const Timer = () => {
  return (
    <section>
      <TimerControl />
      <TimerMain />
      <TimerState />
    </section>
  );
};

export default Timer;
