import React, { useState, useEffect } from "react";

export const Timer = () => {
    const [seconds, setSeconds] = useState(10);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(true);
        console.log("click");
    };

    useEffect(() => {
        if (click) {
            let interval = setInterval(() => {
                clearInterval(interval);
                if (seconds === 0) {
                    setSeconds(seconds);
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }
    }, [seconds, click]);

    //Aquí - hook o set time out
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="section-timer">
            <div className="timer">
                {timerSeconds}
                {!click ? (
                    <button onClick={handleClick}>iniciar</button>
                ) : (
                    <button>Continuar</button>
                )}
                {/* <SubmitButton/> */}
            </div>
        </div>
    );
}