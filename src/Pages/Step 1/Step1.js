import "./Step1.css";
import Frighten from "../../Assets/Frighten.svg";
import CountdownTimer from "../../Components/Timer/CountdownTimer";
import Timer from "../../Components/Timer/Timer";

function Step1() {
  const tenSeconds =  11 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + tenSeconds;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      <Timer/>
    </div>
  );
}

export default Step1;
