import React from "react";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";
import frightenmusic from "../../Assets/Frighten music/acoustic-motivation-11290.mp3";
import frightenmusic2 from "../../Assets/Frighten music/inspirational-background-112290.mp3";
import frightenmusic3 from "../../Assets/Frighten music/motivational-day-112790.mp3";
import frightenmusic4 from "../../Assets/Frighten music/winning-elevation-111355.mp3";
import info from "../../Assets/Info.png";
import { emotionsInfo } from "../../Utils/emotionsInfo";
import './AudioComponent.css'

const musicFrighten = [
    frightenmusic,
    frightenmusic2,
    frightenmusic3,
    frightenmusic4,
];

const randomMusic =
    musicFrighten[Math.floor(Math.random() * musicFrighten.length)];

const { messages } = emotionsInfo;

const randomPhrases =
    messages.miedo[Math.floor(Math.random() * messages.miedo.length)];
console.log(messages);

const AudioComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id='audioComponent'>
            <audio className="audio" src={randomMusic} controls></audio>
            <p id="random-phrases">"{randomPhrases}"</p>
            <section className="section-talk">
                <button className="btn-talk-to-someone" onClick={() => setIsOpen(true)}>
                    {" "}
                    <img id="info" src={info} alt="info" />
                    Necesito hablar con alguien
                </button>
            </section>
            <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}></Modal>
            {/* <button className="mainButton" onClick={handleOnClick}>Finalizar</button> */}
        </div>
    )
}

export default AudioComponent;