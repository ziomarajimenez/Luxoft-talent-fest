import { Header } from "../../Components/Header/Header"
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import indStep1 from '../../Assets/Step indicators/indStep1.png'
import SelectWords from "../../Components/SelectWords/SelectWords"
import './Step1 - Words.css'


export const Step1Words = () => {

    return (
        <>
        <Header />
        <section className='informationHeader'>
            <div className="infoImagesCorner">
                <img className="infoImage" src={Frighten} alt="Frighten" />
                <img className="infoImage" src={briefcase} alt="Briefcase" />
            </div>
            <div className="infoName">
                <h1>Nombre</h1>
            </div>
            <div className="fakeSpace"></div>
        </section>
        <div className="indicator">
            <img className="stepIndicator" src={indStep1} />
        </div>
        <div className="infoBanner">
            <p className="infoParagraph">
                Piensa en la situación que motivó tu miedo <br/>
                De la columna izquierda, elige tres palabras para clasificarla
            </p>
        </div>
        <div>
            <SelectWords />
        </div>
        <div className="mainButtonContainer">
            <button className="mainButton">Continuar</button>
        </div>
        </>
    )

}