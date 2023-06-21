import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useRef } from "react";
import emailjs from '@emailjs/browser';




const Contact = () => {
    const refForm = useRef();

    const sendEmail = (e) =>{
        emailjs
      .sendForm('gmail', 'template_YeJhZkgb', refForm.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
    }
    
    

    return (
        <>
          <div className='container contact-page'>

            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>
                    I am interested in web dev opportunities. However, Feel free to contact me 

                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="<Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>

                </div>

            </div>


          </div>
        </>
    )
}

export default Contact;