import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
// import { Header } from "../../Components/Header/Header"
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import indStep1 from '../../Assets/Step indicators/indStep1.png'
import SelectWords from "../../Components/SelectWords/SelectWords"
import './Step1 - Words.css'
import { motion } from "framer-motion";


export const Step1Words = () => {

    const [disabledButton, setDisabledButton] = useState(true)
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


    const continueButtonClick =()=> {
        console.log("disabledButton => ",disabledButton)
        console.log("👀👍👍 we continue the route")

    }

    return (
        <>
        {/* <Header /> */}
        <section className='informationHeader'>
            <div className="infoImagesCorner">
                <img className="infoFeelingBig" src={Frighten} alt="Frighten" />
                <img className="infoCaseSmall" src={briefcase} alt="Briefcase" />
            </div>
            <div className="infoName">
                <h1>{name}</h1>
            </div>
            <div className="fakeSpace"></div>
        </section>
        <div className="indicator">
            <img className="stepIndicator" src={indStep1} />
        </div>
        <div className="selectorContainer">
            <div className="infoBanner">
                <p className="infoParagraph">
                    Piensa en la situación que generó tu miedo <br/>
                    De la columna izquierda, elige tres palabras para clasificarlo
                </p>
            </div>
            <div>
                <SelectWords setDisabledButton={setDisabledButton} />
            </div>
        </div>
        <div className="mainButtonContainer">
            <motion.button disabled={disabledButton} className="mainButton" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}
            onClick={continueButtonClick} >Continuar</motion.button>
        </div>
        </>
    )

}