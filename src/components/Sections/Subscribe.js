import { useState, useRef } from 'react'
import emailjs from "emailjs-com"

export default function Subscribe() {

    const [email, setEmail] = useState('');
    const thankYouMessage = useRef();



    const sendEmail = (e) =>{

        e.preventDefault()
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email.toLowerCase())) {
            emailjs.sendForm('service_08jlemh', 'template_49uk10k', e.target, 'user_sbXkimweeVQ0rUMCleLeF')
            .then((result) => {
                if(result){
                    thankYouMessage.current.innerHTML = 'THANK YOU FOR SUBSCRIBING';
                    thankYouMessage.current.classList.add('show');
                    setEmail("");
                }
            }, (error) => {
                const { status } = error;
                if (status >=300){
                    thankYouMessage.current.innerHTML = "Server error. Please try again";
                    thankYouMessage.current.classList.add('show');

                }
            });

            
        } else {
            thankYouMessage.current.innerHTML = 'Invalid Email Fromat';
            thankYouMessage.current.classList.add('show');

        }

        setTimeout(()=>{
                thankYouMessage.current.classList.remove('show')
                thankYouMessage.current.innerHTML = '';
        }, 2000)
              
    }


    return (
        <>
            <h1 className = "white-text">Subscribe to our newsletter to know the latest news</h1>
            <div className="input-with-button">
                <form onSubmit={sendEmail} >
                    <input type="text" placeholder="Your e-mail" onChange={(e)=>{setEmail(e.target.value)}} value ={email} />
                    {/* <input type='submit' value="Send"></input> */}
                    <button>Send</button>
                    <p ref={thankYouMessage} className="thank-you-message">Hello</p>
                </form>
            </div>
        </>
    )
}
