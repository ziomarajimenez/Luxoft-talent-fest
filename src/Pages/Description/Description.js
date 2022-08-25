
import { useState, useEffect } from 'react';
import { Header } from '../../Components/Header/Header'
import './Description.css'
import { emotionsInfo } from '../../Utils/emotionsInfo';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
        if (question !== '') {
            navigate('/step1')
        }
    }

    console.log(question)
    return (
        <div className='description'>
            {/* <Header /> */}
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
                <motion.button className='mainButton' 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, borderRadius: "100%" }}
                onClick={handleOnNavigate}>Continuar</motion.button>
            </section>
        </div>
    );
}