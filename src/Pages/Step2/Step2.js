import './Step2.css';
// import { Header } from '../../Components/Header/Header';
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import { useState, useEffect } from 'react';
import { actions } from '../../Utils/emotionsInfo';
import { emotionsInfo } from '../../Utils/emotionsInfo';
import { allStepsActions } from '../../Utils/emotionsInfo';
import ind2 from '../../Assets/Step indicators/indStep2.png'
import { useNavigate } from "react-router-dom";
import { DescribeWords } from '../../Components/DescribeWords/DescribeWords';
import { motion } from "framer-motion";

export const Step2 = () => {
    const [items, setItems] = useState([]);
    const [question, setQuestion] = useState('');
    const [emotion, setEmotion] = useState('')

    const navigate = useNavigate();

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

    const { name, origin } = items;

    const handleOnClick = () => {
        navigate('/yes-step3')
    }
    // console.log(items, emotion, question)
    // console.log(allStepsActions.step2.emotions.emotion.question)

    return (
        <div id='step2'>
            {/* <Header /> */}
            <div className='informationHeader'>
                <div className="infoImagesCorner">
                    <img className="infoImage" src={Frighten} alt="Frighten" />
                    <img className="infoImage" src={briefcase} alt="Briefcase" />
                </div>
                <div className="infoName">
                    <h1>{name}</h1>
                </div>
                <div className="fakeSpace"></div>
            </div>
                <div id='indicator'>
                    <img src={ind2} className="stepIndicator" alt='indicator'></img>
                </div>
            <section id='step2-container'>
                <div id='info-step2'>
                    {/* <p>{actions.step2[question]}</p> */}
                    <DescribeWords />
                    <motion.button className='mainButton' 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8, borderRadius: "100%" }}
                    onClick={handleOnClick}>Continuar</motion.button>
                </div>
            </section>
        </div>
    )
}