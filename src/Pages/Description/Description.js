
import { useState, useEffect } from 'react';
import { Header } from '../../Components/Header/Header'
import './Description.css'
import { emotionsInfo } from '../../Utils/emotionsInfo';

export const Description = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('values'));
        if (items) {
            setItems(items);
        }
    }, []);

    const [question, setQuestion] = useState({
        question: '',
    });

    const handleChange = (evt) => {
        evt.preventDefault();
        const { target } = evt;
        const { value } = target;
        setQuestion(value);
    }


    const { name, origin } = items;

    return (
        <div className='description'>
            <Header />
            <section id='description-content'>
                <div>
                    <h1 className='title'> <b>{name} </b>
                        se siente con miedo <img src={emotionsInfo.img.miedo} id='emotion-pic' alt='icon-origin'></img> y el origen de la emoción es {origin}
                        <img src={emotionsInfo.img.personal} id='icon-origin' alt='icon-origin'></img>
                    </h1>
                </div>
                <p> <b>Descripción de la emoción</b> </p>
                <p>{emotionsInfo.description.miedo}</p>
                <p> <b>{emotionsInfo.question.miedo}</b> </p>
                <div name="origin" onChange={handleChange} id='description-origin'>
                    <input type="radio" value="si" name="origin" /> Sí
                    <br></br>
                    <input type="radio" value="no" name="origin" /> No
                </div>
                <br></br>
                <button id='description-continue'>Continuar</button>
            </section>
        </div>
    );
}