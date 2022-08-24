import React, { useState } from "react"
import { Header } from "../../Components/Header/Header"
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import indStep1 from '../../Assets/Step indicators/indStep1.png'
import SelectWords from "../../Components/SelectWords/SelectWords"
import './Step1 - Words.css'


export const Step1Words = () => {

    // State switch with boolean for conditioning button
    // Function for validating true or false on SelectWords component
    // Return result for enable button

    const [disabledButton, setDisabledButton] = useState(true)


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
                <h1>Nombre</h1>
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
            <button disabled={disabledButton} className="mainButton" onClick={continueButtonClick} >Continuar</button>
        </div>
        </>
    )

}