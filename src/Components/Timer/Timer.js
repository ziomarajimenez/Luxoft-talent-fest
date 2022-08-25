import React, { useState, useEffect } from "react";
import "./timer.css";
import { motion } from "framer-motion";

export const Timer = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [click, setClick] = useState(false);
  const { setDisabledButton } = props;

  const handleClick = () => {
    setClick(true);
    console.log("click");
  };

  useEffect(() => {
    if (click) {
      let interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setSeconds(seconds);
            setMinutes(minutes);
            setDisabledButton(false)
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, click]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <div className="section-timer">
      <motion.div
        className="timer-circle"
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
        }}
        transition={{ repeat: Infinity, duration: 4 }}
        onClick={handleClick}
      >
        {!click ? (
          <div className='time-impress'> Iniciar </div>
        ) : (
          <p className="time-impress">
            {" "}
            {timerMinutes}:{timerSeconds}{" "}
          </p>
        )}
      </motion.div>
    </div>
  );
}