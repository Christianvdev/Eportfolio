import './AboutContent.css'
import jsLogo from '../assets/jsLogo.png';
import reactLogo from '../assets/reactLogo.png';
import djangoLogo from '../assets/djangoLogo.png';
import pythonLogo from '../assets/pythonLogo.png';

import ThinkingEmoji from '../assets/ThinkingEmoji.webp'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function AboutContent(){
    return (
        <>
        
            <div className="page" >

                <div className="mosiac">
                    <div className='card card-left' data-aos="fade-down" data-aos-duration="500">
                        <div className='pill-bubbles'>
                            <h1 className='sub-text'> My technologies ↴</h1>
                            <button className="pill-bubble">
                                <img src={jsLogo} alt="JS Image" className="logo-image"></img>
                                <p1>JavaScript</p1>
                            </button>
                        
                            <button className="pill-bubble">
                                <img src={reactLogo} alt="React Image" className="logo-image"></img>
                                <p1>React</p1>
                            </button>
                        
                            <button className="pill-bubble">
                                <img src={djangoLogo} alt="Django Image" className="logo-image"></img>
                                <p1>Django</p1>
                            </button>
                        
                            <button className="pill-bubble">
                                <img src={pythonLogo} alt="python Image" className="logo-image"></img>
                                <p1>Python</p1>
                            </button>
                        
                        </div>
                    </div>

                    <div className="card card-bottom playwrite" data-aos="fade-up" data-aos-duration="600">
                        <h1> Who am I ? <img src={ThinkingEmoji} alt="ThinkingEmoji" className='emoji-image'></img></h1>

                        <p className='sub-text'>
                            My name is <p1 className="blue-text">christian</p1>, I am a <p1 className='blue-text'>Full stack developer</p1> and a Student based in America. 
                            I love turning ideas into <p1 className='blue-text'>functional results</p1> and learning how to contribute to <p1 className='blue-text'>modern solutions.</p1> 
                            I am constantly experimenting, improving my skills, and taking on new challenges in my development.
                        </p>
                    </div>
                    <div className='card card-right playwrite' data-aos="fade-down" data-aos-duration="1500">
                        <h1 className='main-text'>Why choose me:</h1>
                        <p className='sub-text'><p1 className='blue-text'>Your goals come first</p1> — always. I prioritize your <p1 className='blue-text'>vision</p1>, your <p1 className='blue-text'>deadlines</p1>, 
                            and your <p1 className='blue-text'>success</p1> while delivering clean, 
                            high-quality development <p1 className='blue-text'>you can rely on</p1>.</p>
                    </div>
                    <div className='card card-middle' data-aos="zoom-in">
                        <h1 className='main-text blue-text playwrite'> Christian Vaz</h1>
                    </div>
                    <div className="card card-top" data-aos="fade-down" data-aos-duration="1000">
                        <h1 className='main-text'>" You can be overworked, or you can be outworked. The choice is yours"</h1>
                    </div>


                </div>
            </div>
        </>

    )
}  

export default AboutContent