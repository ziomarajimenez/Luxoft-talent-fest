import './Emotions.css';
import Angry from '../../Assets/Angry.svg'
import Concerned from '../../Assets/Concerned.svg'
import Frighten from '../../Assets/Frighten.svg'
import Sad from '../../Assets/Sad.svg'
import { Header } from '../../Components/Header/Header'

export const Emotions = () => {
    return (
        <>
            <Header />
            <section className="textEmotions">
                <h1>¿Cómo te sientes?</h1>
                <h5> Haz clic sobre alguno de los emoticones</h5>
            </section>
            <div className='emotionsContainer'>
                <div className="imgEmotionsTop">
                    <button className="emotionButton" id="concerned">
                        <img src={Concerned} alt="Concerned" />
                        <p>Disgustado/a</p>
                    </button>
                    <button className="emotionButton" id="frighten">
                        <img src={Frighten} alt="Frighten" />
                        <p>Con Miedo</p>
                    </button>
                </div>
                <div className="imgEmotionsBotton">
                    <button className="emotionButton" id="angry">
                        <img src={Angry} alt="angry" />
                        <p>Enojado/a</p>
                    </button>
                    <button className="emotionButton" id="sad">
                        <img src={Sad} alt="Sad" />
                        <p>Triste</p>
                    </button>
                </div>
            </div>
            <section className='continueEmotionsButton'>
                <button className='continueEmotions'>Continuar</button>
            </section></>
    );
};