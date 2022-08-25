import { motion } from "framer-motion";
import './Emotions.css';
import { useState, useEffect } from 'react';
import { emotionsInfo } from '../../Utils/emotionsInfo';
import { useNavigate } from "react-router-dom";

export const Emotions = () => {
    const [items, setItems] = useState([]);
    const [emotion, setEmotion] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('emotion', JSON.stringify(emotion));
    }, [emotion]);


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('values'));
        if (items) {
            setItems(items);
        }
    }, []);

    const { name } = items;

    const handleOnClick = (event) => {
        let finalEmotion = event.target.dataset.index;
        setEmotion(finalEmotion)
        let allEmotions = document.querySelectorAll('.emotions-color');
        allEmotions.forEach((emotion) => {
            emotion.style.backgroundColor = '#EDEDED';
        })
        let selectedEmotion = document.getElementById(finalEmotion);
        selectedEmotion.style.backgroundColor = '#969696'

    }

    const handleNavigate = () => {
        navigate('/description')
    }

    function SubmitButton() {
        if (emotion !== '') {
            return <motion.button type="button" whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className='mainButton' onClick={handleNavigate} >Continuar</motion.button>
        } else {
            return <button type="button" className='mainButton' disabled>Continuar</button>
        };
    };

    return (
        <div id='emotions-page'>
            <section id='general-container'>
                <section id='emotion-description'>
                    <p>¿Cómo te sientes <span id='username'>{name}</span>?</p>
                    <h5> Haz clic sobre alguno de los emoticones</h5>
                </section>
                <section id='all-emotions'>
                    <div onClick={handleOnClick} data-index='disgusto' id='disgusto' className='emotions-color'>
                        <img src={emotionsInfo.img.disgusto} data-index='disgusto' alt='emotion-icon'></img>
                        <p data-index='disgusto' className='emotion-name'>Disgustado/a</p>
                    </div>
                    <div onClick={handleOnClick} data-index='miedo' id='miedo' className='emotions-color'>
                        <img src={emotionsInfo.img.miedo} alt='emotion-icon' data-index='miedo'></img>
                        <p data-index='miedo' className='emotion-name'>Con miedo</p>
                    </div>
                    <div onClick={handleOnClick} data-index='enojo' id='enojo' className='emotions-color'>
                        <img src={emotionsInfo.img.enojo} alt='emotion-icon' data-index='enojo'></img>
                        <p data-index='enojo' className='emotion-name'>Enojado/a</p>
                    </div>
                    <div onClick={handleOnClick} data-index='tristeza' id='tristeza' className='emotions-color'>
                        <img src={emotionsInfo.img.tristeza} alt='emotion-icon' data-index='tristeza'></img>
                        <p data-index='tristeza' className='emotion-name'> Triste</p>
                    </div>
                </section>
                <SubmitButton />
            </section>
        </div>
    );
}
// export const Emotions = () => {
//     return (
//         <>
//             <Header />
//             <section className="textEmotions">
//                 <h1>¿Cómo te sientes?</h1>
//                 <h5> Haz clic sobre alguno de los emoticones</h5>
//             </section>
//             <div className='emotionsContainer'>
//                 <div className="imgEmotionsTop">
//                     <button className="emotionButton" id="concerned">
//                         <img src={Concerned} alt="Concerned" />
//                         <p>Disgustado/a</p>
//                     </button>
//                     <button className="emotionButton" id="frighten">
//                         <img src={Frighten} alt="Frighten" />
//                         <p>Con Miedo</p>
//                     </button>
//                 </div>
//                 <div className="imgEmotionsBotton">
//                     <button className="emotionButton" id="angry">
//                         <img src={Angry} alt="angry" />
//                         <p>Enojado/a</p>
//                     </button>
//                     <button className="emotionButton" id="sad">
//                         <img src={Sad} alt="Sad" />
//                         <p>Triste</p>
//                     </button>
//                 </div>
//             </div>
//             <section className='continueEmotionsButton'>
//                 <button className='continueEmotions'>Continuar</button>
//             </section></>
//     );
// };