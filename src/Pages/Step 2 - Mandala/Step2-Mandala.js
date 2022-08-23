import { Header } from "../../Components/Header/Header"
import Frighten from '../../Assets/Frighten.svg'
import briefcase from '../../Assets/Briefcase.png'
import MandalaColorApp from "../../Components/Mandala/MandalaColorApp"
import './Step2-Mandala.css';


export const Step2Mandala = () => {

    return (
        <>
        <Header />
        <div>
            {/* El coso de los pasos */}
        </div>
        <section className='informationHeader'>
            <div className="infoImagesCorner">
                <img className="infoImage" src={Frighten} alt="Frighten" />
                <img className="infoImage" src={briefcase} alt="Briefcase" />
            </div>
            <div className="infoName">
                <h1>Nombre</h1>
            </div>
        </section>
        <div className="step2nContainer">
            <div className="infoBanner">
                <p className="infoParagraph">Colorea el mandala</p>
            </div>
            <div className="colorPage">
                <MandalaColorApp />
            </div>
            <div>
                <button>Mock Continuar</button>
            </div>
        </div>
        </>
    )
}