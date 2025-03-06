import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import conc from '../../assets/conc.png'
import loc from '../../assets/loc.png'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8152bab4-ec54-4b20-9e1f-04d1be544a04");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert(data.message);
          event.target.reset();
        } else {
          console.log("Error", data);
       
        }
      };
  return (
    
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Feel free to reach out for collaboration, projects, or just a friendly chat. I'm always open to new opportunities!</p>
                <div className="contact-details">
                <div className="contact-detail">
                    <img src={conc} alt="" /><p>+91-7505959668</p>
                </div>
                <div className="contact-detail">
                    <img src={loc} alt="" /><p>Haldwani, Uttarakhand</p>
                </div>
                <div className="contact-detail">
                    <img src={mail} alt="" /><a href="mailto:vineetpadhalni63@gmail.com">Vineetpadhalni63@gmail.com</a>

                </div>
                </div>
                
            </div>
            <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your eamil'  name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message"  rows="8" placeholder='Enter Your Message'></textarea>
            <button type='submit' className="contact-submit">Sumbit now</button>
        </form>
        </div>
        
    </div>
  )
}

export default Contact