import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <button>Siguiente</button>
    </div>
  );
};

const ShowCounter = ({seconds }) => {
  return (
    <div className="show-counter">
     

        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
     
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
      
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
