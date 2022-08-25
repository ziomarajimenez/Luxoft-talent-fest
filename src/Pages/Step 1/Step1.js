
import './Step1.css';
import { motion } from "framer-motion";
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
// import { Header } from '../../Components/Header/Header';
import { useState, useEffect } from 'react';
import { actions } from '../../Utils/emotionsInfo';
import { emotionsInfo } from '../../Utils/emotionsInfo';
import ind1 from '../../Assets/Step indicators/indStep1.png'
import { useNavigate } from "react-router-dom";
import { DescribeWords } from '../../Components/DescribeWords/DescribeWords';
// import { Timer } from './Timer.js'

const Step1 = () => {
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

    console.log(items, question, emotion);

    const { name, origin } = items;

    const handleOnClick = () => {
        navigate('/not-step2')
    }

    return (
        <div id='step1'>
            {/* <Header /> */}
              <div className='informationHeader'>
                <div className="infoImagesCorner">
                  <img className="infoFeelingBig" src={Frighten} alt="Frighten" />
                  <img className="infoCaseSmall" src={briefcase} alt="Briefcase" />
                </div>
                <div className="infoName">
                    <h1>{name}</h1>
                </div>
                <div className="fakeSpace"></div>
              </div>
                <div id='indicator'>
                    <img src={ind1} className="stepIndicator" alt='indicator'></img>
                </div>
            <section id='step1-container'>
                <div id='info-step1'>
                    <p>{actions.step1[question]}</p>
                    {/* <Timer /> */}
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

export default Step1;
