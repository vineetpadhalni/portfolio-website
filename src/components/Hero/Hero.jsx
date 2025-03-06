import React, { useState } from 'react';
import Modal from 'react-modal';
import './Hero.css';
import profile from "../../assets/download.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" />
        <h1><span>I'm Vineet Padhalni,</span> Aspiring developer based in India</h1>
        <p> A passionate developer with a keen interest in frontend development, technology, and problem-solving. Always exploring new innovations in the tech world!</p>
         <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
            </div>
            <div className="my-resume" onClick={() => setModalIsOpen(true)}>My Resume</div>
         </div>

         {/* Resume Modal */}
         <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
            <iframe src="/resume.pdf" width="100%" height="600px" title="Resume"></iframe>
         </Modal>
    </div>
  );
};

export default Hero;
