import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./step3.css";
import { emotionsInfo, actions } from "../../Utils/emotionsInfo";
import { useNavigate } from "react-router-dom";
import ind3 from '../../Assets/Step indicators/indStep3.png'
import AudioComponent from '../../Components/AudioComponent/AudioComponent'
import Questions from '../../Components/Questions/Questions'
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'

const Step3 = () => {
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
    navigate('/end')
  }

  const { name, origin } = items;

  return (
    
        <>
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
        <div className='indicator'>
            <img src={ind3} className="stepIndicator" alt='indicator'></img>
        </div>
        <section className='step3-container'>
            <div className='info-step3'>
                <div className="infoBannerSpec">
                    <p className="infoParagraph">{actions.step3[question]} </p>
                </div>
                <div className='stepBuild'>
                    <div className="audioContainer">
                    {question === 'si' ? <Questions /> : <AudioComponent />}
                </div>
                <motion.button className='mainButton' whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={handleOnClick}>Finalizar</motion.button>
                </div>
            </div>
        </section>
        </>
  );
};

export default Step3;

