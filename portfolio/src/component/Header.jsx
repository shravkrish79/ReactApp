import '../styles/Header.css';
import logo from '../assests/logo.png'

export default function navbar() {
    return (
        <div className='navbar'>
            <nav>
                <a href="#hero"><img src={logo} alt="logo" className='logo' /> </a>
                <ul>
                    <li><a href="#about"> About </a> </li>
                    <li><a href="#projects"> Projects </a> </li>
                    <li><a href="#tech"> Tech </a> </li>
                    <li><a href="#contact"> Contact </a> </li>
                </ul>
            </nav>
        </div>
    )
};

