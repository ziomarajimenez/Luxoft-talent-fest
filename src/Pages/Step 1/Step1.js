
import './Step1.css';
// import Frighten from '../../Assets/Frighten.svg'
import { Header } from '../../Components/Header/Header';
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
            <Header />
            <section id='step1-container'>
                <div id='title-step1'>
                    <img alt='icon-emotion' src={emotionsInfo.img[emotion]} id='step1-emotion'></img>
                    <img alt='icon-source' src={emotionsInfo.img[origin]} id='step1-origin'></img>
                    <h1>{name}</h1>
                </div>
                <div id='indicator'>
                    <img src={ind1} className="stepIndicator" alt='indicator'></img>
                </div>
                <div id='info-step1'>
                    <p>{actions.step1[question]}</p>
                    {/* <Timer /> */}
                    <DescribeWords />
                    <button className='mainButton' onClick={handleOnClick}>Continuar</button>
                </div>
            </section>
        </div>
    )
}

export default Step1;
