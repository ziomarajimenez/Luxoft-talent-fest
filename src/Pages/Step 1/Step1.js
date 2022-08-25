
import './Step1.css';
import { useState, useEffect } from 'react';
import { actions } from '../../Utils/emotionsInfo';
import { emotionsInfo } from '../../Utils/emotionsInfo';
import ind1 from '../../Assets/Step indicators/indStep1.png'
import { useNavigate } from "react-router-dom";
import { Timer } from '../../Components/Timer/Timer'
import SelectWords from '../../Components/SelectWords/SelectWords'

const Step1 = () => {
    const [items, setItems] = useState([]);
    const [question, setQuestion] = useState('');
    const [emotion, setEmotion] = useState('')
    const [disabledButton, setDisabledButton] = useState(true)
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
        navigate('/step2')
    }

    return (
        <div id='step'>
            <section className='step-container'>
                <div className='title-step'>
                    <div className='step-icon'>
                        <img alt='icon-emotion' src={emotionsInfo.img[emotion]} id='step1-emotion'></img>
                        <img alt='icon-source' src={emotionsInfo.img[origin]} id='step1-origin'></img>
                    </div>
                    <h1 className='step-title'>{name}</h1>
                </div>
                <div className='indicator'>
                    <img src={ind1} className="stepIndicator" alt='indicator'></img>
                </div>
                <div className='info-step'>
                    <p className='action-description'>{actions.step1[question]}</p>
                </div>
                {/* <Timer /> */}
                {/* <SelectWords /> */}
                {question === 'no' ? <Timer setDisabledButton={setDisabledButton} /> : <SelectWords setDisabledButton={setDisabledButton} />}
                <button className='mainButton' onClick={handleOnClick} disabled={disabledButton} >Continuar</button>

            </section>
        </div>
    )
}

export default Step1;
