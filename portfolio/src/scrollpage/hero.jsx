import '../styles/hero.css';
// import HeroImg from '../assests/hero/L1.jpg';

export default function hero() {

    return (
        <div className="hero" id="hero">
            <div className="hero-left">
                <h1>
                    <span>Hej!</span>
                    <span>I’m &nbsp;<span id="heroname"> Poongothai</span></span>
                    <span>from &nbsp;<span id="heroplace">Stockholm</span></span>
                    <span>Front-End Developer</span></h1>
            </div>
            <div className="hero-right">
                {/* <img src={HeroImg} alt="hero" /> */}
                {/* <p>hi</p> */}
            </div>
        </div>
    );
}