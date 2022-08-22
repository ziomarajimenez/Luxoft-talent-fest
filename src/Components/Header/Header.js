import logo from '../../Assets/Luxoft Purple RGB.png'
import './Header.css'

export const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="luxoft-logo" className='logo-header'></img>
            <h1 className='title-motool'>MoTool</h1>
        </header>
    );
}