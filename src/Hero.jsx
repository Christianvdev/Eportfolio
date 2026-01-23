import './Hero.css'
import jsLogo from './assets/jsLogo.png'
import reactLogo from './assets/reactLogo.png'
import djangoLogo from './assets/djangoLogo.png'
import pythonLogo from './assets/pythonLogo.png'

function HeroDisplay(){
    return (
        <>
            <div className="content-outer">
                <div className='content-inner'>
                    <div className='intro-text'>
                        <h1> 
                            Full-Stack Developer<br/>
                            creating clean, reliable<br/>
                            code
                        </h1>
                    </div>
                    
                    <div className='hero-body'>
                        <p>
                            I craft modern web applications as well as games with a focus on<br/>
                            creativity and maintainability
                        </p>
                    </div>
                    
                    <div className='buttons'>
                        <button className='white-button'> View My Work</button>
                        <button>Get in Touch</button>
                    </div>

                    <div className='pill-bubbles'>

                        <button className="pill-bubble">
                            <img src={jsLogo} alt="JS Image" className="logo-image"></img>
                            JavaScript
                        </button>

                        <button className="pill-bubble">
                            <img src={reactLogo} alt="React Image" className="logo-image"></img>
                            React
                        </button>

                        <button className="pill-bubble">
                            <img src={djangoLogo} alt="Django Image" className="logo-image"></img>
                            Django
                        </button>

                        <button className="pill-bubble">
                            <img src={pythonLogo} alt="python Image" className="logo-image"></img>
                            Python
                        </button>

                    </div>

                </div>

                

            </div>
           
            
        </>
    )
}

export default HeroDisplay;