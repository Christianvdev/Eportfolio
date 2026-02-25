import './ContactContent.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function ContactContent(){
    return(
        <>
            <div className="page">

                <div className='marquee' data-aos="fade-right">
                    <div className='marquee-inner'>
                        <span> Christian • Christian • Christian • Christian • </span>
                        <span> Christian • Christian • Christian • Christian • </span>
                    </div>
                </div>
                <div className='contact-container playwrite' data-aos="zoom-in">
                    <h1>Contact:</h1>
                    <p>
                        Email → ChristianTech77@gmail.com
                    </p>
                </div>
                 <div className='bottom-section' data-aos="fade-up">
                        <h1 className='underline'>Lets chat</h1>
                        <p1>
                            You can find my email above or contact me through the other options ↴
                        </p1>
                    </div>


            </div>
        </>
    )
}

export default ContactContent;