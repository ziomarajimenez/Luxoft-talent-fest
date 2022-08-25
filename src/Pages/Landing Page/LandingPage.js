import { Header } from '../../Components/Header/Header'
import './LandingPage.css'
import { useState, useEffect } from 'react';
import heart from '../../Assets/Heart.png'
import briefcase from '../../Assets/Briefcase.png'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const LandingPage = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        gender: '',
        age: '',
        origin: ''
    });

    useEffect(() => {
        localStorage.setItem('values', JSON.stringify(values));
    }, [values]);


    const handleChange = (evt) => {
        evt.preventDefault();

        const { target } = evt;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value,
        };
        setValues(newValues);
        if (name === 'age') document.getElementById('years').style.borderColor = 'black';
    }

    const handleOnClick = () => {
        if (values.age > 100) {
            document.getElementById('years').style.borderColor = 'red';
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    gender: values.gender,
                    age: values.age
                })
            };
            fetch('https://630400cf761a3bce77e20ce8.mockapi.io/users', requestOptions)
                .then(response => {
                    response.json();
                    navigate('/emotions')
                })
                .catch(res => console.log(res))
        }
    }

    function SubmitButton() {
        if (values.name !== '' && values.gender !== '' && values.age !== '' && values.origin !== '') {
            return <motion.button type="button" className='mainButton'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, borderRadius: "100%" }}
            onClick={handleOnClick} >Continuar</motion.button>
        } else {
            return <button type="button" className='mainButton' disabled>Continuar</button>
        };
    };

    return (
        <div className="landing-page">
            {/* <Header /> */}
            <p>Por favor escribe cómo te gusta ser llamado:</p>
            <input type="text" placeholder="Nombre o nickname" name="name" onChange={handleChange} maxLength={50} required></input>
            <p>Por favor, selecciona tu género:</p>
            <select name="gender" onChange={handleChange}>
                <option hidden disabled selected value>Selecciona</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="no-binario">No binario</option>
                <option value="prefiero-no-decir">Prefiero no decir</option>
            </select>
            <p>Ingresa tu edad:</p>
            <div id='age'>
                <input type="number" id='years' placeholder="Años" name="age" onChange={handleChange} min='1' max='100' required></input>
                <span class="validity"></span>
            </div>
            <p>¿Cuál es el origen de tu emoción?</p>
            <div name="origin" onChange={handleChange} id='origin'>
                <input type="radio" value="personal" name="origin" /> Personal
                <img src={heart} alt='heart-icon' className='heart'></img>
                <br></br>
                <input type="radio" value="laboral" name="origin" /> Laboral
                <img src={briefcase} alt='briefcase-icon' className='brief-case'></img>
            </div>
            <br></br>
            {/* <button onClick={handleOnClick} className='continue'>Continuar</button> */}
            <SubmitButton />
        </div>
    );
}