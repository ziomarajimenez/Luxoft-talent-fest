import { emotionsInfo } from "../../Utils/emotionsInfo";
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";
import info from "../../Assets/Info.png";
import './Questions.css';

const Questions = () => {
    const { messages } = emotionsInfo;
    const randomPhrases = messages.miedo[Math.floor(Math.random() * messages.miedo.length)];

    const [isOpen, setIsOpen] = useState(false);
    return (
            <>
            <div className="allContainer">
            <div className="questionsContainer">
                <p className="stepQuestion">¿Esta situación puede realmente hacerme daño?</p>
                <p className="stepQuestion">¿Qué es lo peor que podría pasar?</p>
                <p className="stepQuestion">¿Qué haría en ese escenario?</p>
            </div>
            <p className="stepQuestion" id='phrase'> <i>"{randomPhrases}"</i></p>
            <section className="section-talk">
                <img className="infoIcon" src={info} alt="info" />
                <button className="btn-talk-to-someone" onClick={() => setIsOpen(true)}>
                    {" "}
                    Necesito hablar con alguien
                </button>
            </section>
            <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}></Modal>
            </div>
            </>
    )
}

export default Questions;