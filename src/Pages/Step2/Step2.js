import './Step2.css';
import { Header } from '../../Components/Header/Header';
import { useState, useEffect } from 'react';
import { actions } from '../../Utils/emotionsInfo';
import { emotionsInfo } from '../../Utils/emotionsInfo';
import { allStepsActions } from '../../Utils/emotionsInfo';
import ind2 from '../../Assets/Step indicators/indStep2.png'
import { useNavigate } from "react-router-dom";
import MandalaColorApp from '../../Components/Mandala/MandalaColorApp';
// import { DescribeWords } from '../../Components/DescribeWords/DescribeWords';

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
        navigate('/step3')
    }
    // console.log(items, emotion, question)
    // console.log(allStepsActions.step2.emotions.emotion.question)

    return (
        <div id='step2'>
            <Header />
            <section id='step2-container'>
                <div id='title-step2'>
                    <img alt='icon-emotion' src={emotionsInfo.img[emotion]} id='step2-emotion'></img>
                    <img alt='icon-source' src={emotionsInfo.img[origin]} id='step2-origin'></img>
                    <h1>{name}</h1>
                </div>
                <div id='indicator'>
                    <img src={ind2} className="stepIndicator" alt='indicator'></img>
                </div>
                <div id='info-step2'>
                    <p>{actions.step2[question]}</p>
                    <MandalaColorApp />
                    <button className='mainButton' onClick={handleOnClick}>Continuar</button>
                </div>
            </section>
        </div>
    )
}