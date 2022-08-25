import './Step2.css';
import { useState, useEffect } from 'react';
import { actions } from '../../Utils/emotionsInfo';
import { emotionsInfo } from '../../Utils/emotionsInfo';
import ind2 from '../../Assets/Step indicators/indStep2.png'
import { useNavigate } from "react-router-dom";
import DescribeWords from '../../Components/DescribeWords/DescribeWords';
import MandalaColorApp from "../../Components/Mandala/MandalaColorApp"

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

    return (
        <div className='step'>
            <section className='step-container'>
                <div className='title-step'>
                    <div className='step-icon'>
                        <img alt='icon-emotion' src={emotionsInfo.img[emotion]} id='step2-emotion'></img>
                        <img alt='icon-source' src={emotionsInfo.img[origin]} id='step2-origin'></img>
                    </div>
                    <h1>{name}</h1>
                </div>
                <div className='indicator'>
                    <img src={ind2} className="stepIndicator" alt='indicator'></img>
                </div>
                <div className='info-step'>
                    <p className='action-description'>{actions.step2[question]}</p>
                    {question === 'si' ? <DescribeWords /> : <MandalaColorApp />}
                    <button className='mainButton' onClick={handleOnClick}>Continuar</button>
                </div>
            </section>
        </div>
    )
}