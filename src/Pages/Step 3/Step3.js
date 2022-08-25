import React from "react";
import { useState } from "react";
import { SecSteps } from "../../Components/Section steps/SecSteps";
import Modal from "../../Components/Modal/Modal";
import "./step3.css";
import frightenmusic from "../../Assets/Frighten music/acoustic-motivation-11290.mp3";
import frightenmusic2 from "../../Assets/Frighten music/inspirational-background-112290.mp3";
import frightenmusic3 from "../../Assets/Frighten music/motivational-day-112790.mp3";
import frightenmusic4 from "../../Assets/Frighten music/winning-elevation-111355.mp3";
import info from "../../Assets/Info.png";
import { emotionsInfo } from "../../Utils/emotionsInfo";
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import indStep3 from '../../Assets/Step indicators/indStep3.png'
import { motion } from "framer-motion";

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

const Step3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <section className='informationHeader'>
            <div className="infoImagesCorner">
                <img className="infoFeeling" src={Frighten} alt="Frighten" />
                <img className="infoCase" src={briefcase} alt="Briefcase" />
            </div>
            <div className="infoName">
                <h1>Nombre</h1>
            </div>
            <div className="fakeSpace"></div>
        </section>
        <div className="indicator">
            <img className="stepIndicator" src={indStep3} />
        </div>
    <div className="section-audio">
      {/* <SecSteps /> */}
      <section id="audio-instructions">
        <p className="audio-p">Escucha el siguiente audio</p>
      </section>

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
    </div>
    <div className="mainButtonContainer">
      <motion.button className="mainButton"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8, borderRadius: "100%" }}
      >Finalizar</motion.button>
    </div>

    </>
  );
};

export default Step3;
