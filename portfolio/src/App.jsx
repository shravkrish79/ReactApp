
import { useState } from 'react';
import Navbar from './component/Header';
import Projects from './scrollpage/projects';
import Modal from './component/modal';
import Hero from './scrollpage/hero';
import About from './scrollpage/about';
import Tech from './scrollpage/tech';
import Contact from './scrollpage/contact';
import './styles/App.css';
import './styles/variables.css';

function App() {

  const [showModal, setShowModal] = useState(null);

  return (
    <div className='portfolio'>
      <Navbar />
      <Hero />
      <About />
      <Projects setShowModal={setShowModal} />
      <Tech />
      <Contact />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
