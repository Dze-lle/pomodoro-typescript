import TimerSlider from "./components/TimerSlider/TimerSlider";
import TimerMain from "./components/TimerMain/TimerMain";
import TimerButton from "./components/TimerButton/TimerButton";

const Timer = () => {
  return (
    <section className="container">
      <TimerSlider />
      <TimerMain />
      <TimerButton />
    </section>
  );
};

export default Timer;
