import './Step1.css';
import Frighten from '../../Assets/Frighten.svg'
function Step1() {
    return (
        <><section className='informationHeader'>
            <img src={Frighten} alt="Frighten" />
            <h1>Nombre</h1>
        </section>
            <section className='instructionsBreathing'>
                <div className='textBreath'><p>Realiza respiraciones profundas por 10 segundos</p></div>
            </section>
            <section className='Countdown'>
                <section className='CountdownCircle'>
                    <p>00:00</p>
                </section>
            </section>
            <section className='startButtonSection'>
                <button className='startButton'>Iniciar</button>
            </section>
        </>
    );
}
export default Step1;