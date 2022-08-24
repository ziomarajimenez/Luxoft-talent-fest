import React from "react";
import { SecSteps } from "../../Components/Section steps/SecSteps";
import "./step3.css";
import frightenmusic from "../../Assets/Frighten music/acoustic-motivation-11290.mp3";
import frightenmusic2 from "../../Assets/Frighten music/inspirational-background-112290.mp3";
import frightenmusic3 from "../../Assets/Frighten music/motivational-day-112790.mp3";
import frightenmusic4 from "../../Assets/Frighten music/winning-elevation-111355.mp3";

const Step3 = () => {
  let musicFrighten = [
    frightenmusic,
    frightenmusic2,
    frightenmusic3,
    frightenmusic4,
  ];
  let randomMusic =
    musicFrighten[Math.floor(Math.random() * musicFrighten.length)];

    // let phrases = [“Cada día aprendo más sobre cómo canalizar mis emociones”,
    //   “El valor consiste en vencer el miedo”,
    //   “He pasado toda mi vida viviendo con miedos y hoy quiero enfrentarlos.”,
    //   “Todos vivimos con miedo, pero cada día tratamos de que no nos gane.”]

  return (
    <div className="section-audio">
      <SecSteps />
      <section id="audio-instructions">
        <p>Escucha el siguiente audio</p>
      </section>
      <audio src={randomMusic} controls></audio>

      <p>“Cada día aprendo más sobre cómo canalizar mis emociones”</p>
      <p> Necesito hablar con alguien</p>
      <button>Finalizar</button>
    </div>
  );
};

export default Step3;
