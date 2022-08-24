import React, { useState, useEffect } from "react";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [displayButton, setDisplayButton] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
    console.log("click");
  };

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayButton(!displayButton);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="timer">
        {timerMinutes}:{timerSeconds}
        <div className="message">{displayButton && <div>boton</div>}</div>
        <button onClick={handleClick}>iniciar</button>
      </div>
    </div>
  );
}
