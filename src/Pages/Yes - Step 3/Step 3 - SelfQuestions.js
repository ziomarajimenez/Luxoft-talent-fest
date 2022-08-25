import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { Header } from "../../Components/Header/Header"
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import indStep3 from '../../Assets/Step indicators/indStep3.png'
import Modal from "../../Components/Modal/Modal";
import './Step 3 - SelfQuestions.css'


export const Step3SelfQuestions = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [question, setQuestion] = useState('');
    const [emotion, setEmotion] = useState('')

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('values'));
        const question = JSON.parse(localStorage.getItem('question'));
        const emotion = JSON.parse(localStorage.getItem('emotion'));
        if (items) {
            setItems(items);
        }
        if (question) {
            setQuestion(question)
        }
        if (emotion) {
            setEmotion(emotion)
        }
    }, []);

    console.log(items, question, emotion);

    const handleOnClick = () => {
        navigate('')
    }

    const { name } = items;

    return (
        <>
        {/* <Header /> */}
        <section className='informationHeader'>
            <div className="infoImagesCorner">
                <img className="infoFeeling" src={Frighten} alt="Frighten" />
                <img className="infoCase" src={briefcase} alt="Briefcase" />
            </div>
            <div className="infoName">
                <h1>{name}</h1>
            </div>
            <div className="fakeSpace"></div>
        </section>
        <div className="indicator">
            <img className="stepIndicator" src={indStep3} alt='stepIndicator'/>
        </div>
        <div className="stepContainer">
            <div className="infoBanner">
                <p className="infoParagraph">
                    Reflexiona sobre lo escrito anteriormente y hazte las siguientes preguntas 
                    <br></br>
                    Además, encuentra un momento para buscar a tu Direct Manager, platicar
                    sobre lo que sucedió y compartir tus sentimientos
                </p>
            </div>
            <div className="questionsContainer">
                <p className="stepQuestion">¿Esta situación puede realmente hacerme daño?</p>
                <p className="stepQuestion">¿Qué es lo peor que podría pasar?</p>
                <p className="stepQuestion">¿Qué haría en ese escenario?</p>
            </div>

            <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}></Modal>
            
            <div className="mainButtonContainer">
                <motion.button className="mainButton" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, borderRadius: "100%" }}
                onClick={handleOnClick}>Finalizar</motion.button>
            </div>
        </div>
        </>
    )
}