import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import indStep2 from '../../Assets/Step indicators/indStep2.png'
import MandalaColorApp from "../../Components/Mandala/MandalaColorApp"
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Step2 = () => {
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
        navigate('/step3')
    }

    const { name } = items;

    return (
        <>
            <section className='informationHeader'>
                <div className="infoImagesCorner">
                    <img className="infoImage" src={Frighten} alt="Frighten" />
                    <img className="infoImage" src={briefcase} alt="Briefcase" />
                </div>
                <div className="infoName">
                    <h1>{name}</h1>
                </div>
                <div className="fakeSpace"></div>
            </section>
            <div className="indicator">
                <img className="stepIndicator" src={indStep2} />
            </div>
            <div className="stepContainer">
                <div className="infoBanner">
                    <p className="infoParagraph">Colorea el mandala</p>
                </div>
                <div className="colorPage">
                    <MandalaColorApp />
                </div>
                <div className="mainButtonContainer">
                    <button className="mainButton" onClick={handleOnClick}>Continuar</button>
                </div>
            </div>
        </>
    )
}

export default Step2;