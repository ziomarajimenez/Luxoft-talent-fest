import { Header } from "../../Components/Header/Header"
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import indStep2 from '../../Assets/Step indicators/indStep2.png'
import MandalaColorApp from "../../Components/Mandala/MandalaColorApp"
import './Step2-Mandala.css';


export const Step2Mandala = () => {

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
            <img className="stepIndicator" src={indStep2} />
        </div>
        <div className="stepContainer">
            <div className="infoBanner">
                <p className="infoParagraph">Colorea el mandala</p>
            </div>
            <div className="colorPage">
                <MandalaColorApp />
            </div>
            <div className="mainButtonContainer">
                <button className="mainButton">Continuar</button>
            </div>
        </div>
        </>
    )
}