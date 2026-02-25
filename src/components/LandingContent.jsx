import '../components/Landing.css'
import WaveEmoji from '../assets/WaveEmoji.png'
import { Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function LandingContent() {
    return(
        <> 
            <div className='page'>
                <div className='marquee'>
                    <div className='marquee-inner'>
                        <span> Christian • Christian • Christian • Christian • </span>
                        <span> Christian • Christian • Christian • Christian • </span>
                    </div>
                </div>

                <div className="center-align">   
                    <div className='landing-prompt' data-aos="fade-up">
                        <h1>Hello</h1>
                    <img src={WaveEmoji} alt='Wave' className='image'></img>

                    </div>
                        <p1>Im Christian, im interested in computer science, web development, game development, and more</p1>
                        <div className='nav-link-container'>
                        <Link to="/About" className='nav-link'>/About</Link>
                        <Link to="/Projects" className='nav-link'>/Projects</Link>
                        <Link to="/Contact" className='nav-link'>/Contact</Link>

                    </div>

                </div>
                
            </div>
           
        </>
    )
}

export default LandingContent;