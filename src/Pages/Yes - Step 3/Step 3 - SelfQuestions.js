import { Header } from "../../Components/Header/Header"
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import indStep3 from '../../Assets/Step indicators/indStep3.png'
import './Step 3 - SelfQuestions.css'


export const Step3SelfQuestions = () => {

    return (
        <>
        <Header />
        <section className='informationHeader'>
            <div className="infoImagesCorner">
                <img className="infoFeeling" src={Frighten} alt="Frighten" />
                <img className="infoCase" src={briefcase} alt="Briefcase" />
            </div>
            <div className="infoName">
                <h1>Nombre</h1>
            </div>
            <div className="fakeSpace"></div>
        </section>
        <div className="indicator">
            <img className="stepIndicator" src={indStep3} />
        </div>
        <div className="stepContainer">
            <div className="infoBanner">
                <p className="infoParagraph">
                    Reflexiona sobre lo escrito anteriormente y hazte las siguientes preguntas. 
                    <br></br>
                    Además, encuentra un momento para buscar a tu Direct Manager, platicar
                    sobre lo que sucedió y compartir tus sentimientos.
                </p>
            </div>
            <div className="questionsContainer">
                <p className="stepQuestion">¿Esta situación puede realmente hacerme daño?</p>
                <p className="stepQuestion">¿Qué es lo peor que podría pasar?</p>
                <p className="stepQuestion">¿Qué haría en ese escenario?</p>
            </div>
            <div className="mainButtonContainer">
                <button className="mainButton">Finalizar</button>
            </div>
        </div>
        </>
    )
}