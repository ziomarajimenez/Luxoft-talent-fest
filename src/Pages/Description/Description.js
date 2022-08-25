
import { useState, useEffect } from 'react';
import './Description.css'
import { emotionsInfo } from '../../Utils/emotionsInfo';
import { useNavigate } from "react-router-dom";

export const Description = () => {
    const [items, setItems] = useState([]);
    const [userEmotion, setUserEmotion] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('values'));
        if (items) {
            setItems(items);
        }
    }, []);

    useEffect(() => {
        const usersEmotion = JSON.parse(localStorage.getItem('emotion'));
        if (usersEmotion) {
            setUserEmotion(usersEmotion);
        }
    }, []);

    const [question, setQuestion] = useState({
        question: '',
    });

    useEffect(() => {
        localStorage.setItem('question', JSON.stringify(question));
    }, [question]);

    console.log(question)

    const handleChange = (evt) => {
        evt.preventDefault();
        const { target } = evt;
        const { value } = target;
        setQuestion(value);
    }

    const { name, origin } = items;

    const handleOnNavigate = () => {
        navigate('/Step1')
        // if (question === 'si') {
        //     navigate('/yes-step1')
        // } else if (question === 'no') {
        //     navigate('/Step1')
        // }
    }

    console.log(question)
    return (
        <div className='description'>
            <section id='description-content'>
                <div>
                    <h1 className='title'> <b>{name} </b>
                        {emotionsInfo.title[userEmotion]} <img src={emotionsInfo.img[userEmotion]} id='emotion-pic' alt='icon-origin'></img> y el origen de la emoción es {origin}
                        <img src={emotionsInfo.img[origin]} id='icon-origin' alt='icon-origin'></img>
                    </h1>
                </div>
                <p> <b>Descripción de la emoción</b> </p>
                <p>{emotionsInfo.description[userEmotion]}</p>
                <p> <b>{emotionsInfo.question[userEmotion]}</b> </p>
                <div name="origin" onChange={handleChange} id='description-origin'>
                    <input type="radio" value="si" name="origin" /> Sí
                    <br></br>
                    <input type="radio" value="no" name="origin" /> No
                </div>
                <br></br>
                <button className='mainButton' onClick={handleOnNavigate}>Continuar</button>
            </section>
        </div>
    );
}