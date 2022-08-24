import React, { useState, useEffect } from "react";
import "./timer.css";
import { motion } from "framer-motion";

export default function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
    console.log("click");
  };

  //   function SubmitButton() {
  //     const btnContinue = setTimeout(
  //       <button type="button" className="mainButton">
  //         Continuar
  //       </button>,
  //       5000
  //     );
  //     clearTimeout(btnContinue);

  //     if (!click) {
  //       return (
  //         <button onClick={handleClick} type="button" className="mainButton">
  //           Listo
  //         </button>
  //       );
  //     } else {
  //       return btnContinue;
  //     }
  //   }

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
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, click]);

  //set time out o hook
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="section-timer">
      <motion.div
        className="timer-circle"
        animate={{
          scale: [1, 1.1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <p className="time-impress">
          {" "}
          {timerMinutes}:{timerSeconds}{" "}
        </p>
      </motion.div>

      {!click ? (
        <button onClick={handleClick}>iniciar</button>
      ) : (
        <button>Continuar</button>
      )}
      {/* <SubmitButton/> */}
    </div>
  );
}
