import '../styles/about.css';
import AboutImg from '../assests/hero/aboutimg.png';

export default function about() {
   return (
      <div className="about" id="about">
         <div className="about-left">
            <div className="about-title">
               <h1>About Me</h1></div>
            <div className='about-desc'>
               <p>My name is Poongothai Rajesh.
                  I am a passionate Front-end Developer based in Stockholm, Sweden.</p>&nbsp;
               <p>I have a passion for developing user-friendly, accessible and responsive websites
                  with JavaScript / ReactJS / HTML / CSS. I never stop learning and want to challenge myself
                  in every new project.</p>&nbsp;
               <p>Scroll down to see some of my work!</p>&nbsp;
            </div></div>
         <div className="about-right">
            <img src={AboutImg} alt='abouthero' />
         </div>
      </div>
   );
};