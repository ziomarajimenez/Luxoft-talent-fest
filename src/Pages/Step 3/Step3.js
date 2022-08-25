import { useState, useEffect } from "react";
import "./step3.css";
import { emotionsInfo, actions } from "../../Utils/emotionsInfo";
import { useNavigate } from "react-router-dom";
import ind3 from '../../Assets/Step indicators/indStep3.png'
import AudioComponent from '../../Components/AudioComponent/AudioComponent'
import Questions from '../../Components/Questions/Questions'

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
    <div className='step'>
      <section className='step-container'>
        <div className='title-step'>
          <div className='step-icon'>
            <img alt='icon-emotion' src={emotionsInfo.img[emotion]} id='step3-emotion'></img>
            <img alt='icon-source' src={emotionsInfo.img[origin]} id='step3-origin'></img>
          </div>
          <h1>{name}</h1>
        </div>
        <div className='indicator'>
          <img src={ind3} className="stepIndicator" alt='indicator'></img>
        </div>
        <div className='info-step'>
          <p className='action-description'>{actions.step3[question]} </p>
          {question === 'si' ? <Questions /> : <AudioComponent />}
          <button className='mainButton' onClick={handleOnClick}>Continuar</button>
        </div>
      </section>
    </div>
  );
};

export default Step3;
