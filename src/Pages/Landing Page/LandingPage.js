import { Header } from '../../Components/Header/Header'
import './LandingPage.css'
import { useState } from 'react';
import heart from '../../Assets/Heart.png'
import briefcase from '../../Assets/Briefcase.png'

export const LandingPage = () => {

    const [values, setValues] = useState({
        name: '',
        gender: '',
        age: '',
        origin: ''
    });

    const handleChange = (evt) => {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value,
        };
        console.log(name, value)
        setValues(newValues);
    }


    const handleOnClick = () => {

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
            })
            .catch(res => console.log(res))
    }

    return (
        <div className="landing-page">
            <Header />
            {/* <div className='circle'> 1 </div> */}
            <p>  Por favor escribe cómo te gusta ser llamado:</p>
            <input type="text" placeholder="Nombre o nickname" name="name" onChange={handleChange} maxLength={50} required></input>
            <p>Por favor, selecciona tu género:</p>
            <select name="gender" onChange={handleChange}>
                <option value="masculino">Masculino</option>
                <option value="femenino" selected>Femenino</option>
                <option value="no-binario">No binario</option>
                <option value="prefiero-no-decir">Prefiero no decir</option>
            </select>
            <p>Ingresa tu edad:</p>
            <input type="number" placeholder="Años" name="name" onChange={handleChange} min={1} max={100}></input>
            <p>¿Cuál es el origen de tu emoción?</p>
            <div name="name" onChange={handleChange}>
                <input type="radio" value="personal" name="name" /> Personal
                <img src={heart} alt='heart-icon' className='heart'></img>
                <br></br>
                <input type="radio" value="laboral" name="name" /> Laboral
                <img src={briefcase} alt='briefcase-icon' className='brief-case'></img>
            </div>
            <br></br>
            <button onClick={handleOnClick}>Continuar</button>
        </div>
    );
}