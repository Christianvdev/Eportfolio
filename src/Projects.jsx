
import projectRealityImage from './assets/ProjectReality.png'
import './Projects.css'
function DisplayProjects(){
    return (
        <>
            <div className='Outer-Page'>

                <div className='Intro-Section'>
                    <h1>Projects</h1>
                </div>

                <div className='Projects-Display'>

                    <div className='Project-Card'>
                        <img src={projectRealityImage} alt="ProjectReality Image" className='Project-Image'></img>
                        <a
                            href='https://projectreality.netlify.app/'
                            rel="ProjectReality-Link"
                        > 
                            A mockup website for a VR company<br/>
                            Click here to check it out
                        </a>
                    </div>

                    <div className='Project-Card'>
                        <img src={projectRealityImage} alt="ProjectReality Image" className='Project-Image'></img>
                        <a
                            href='https://projectreality.netlify.app/'
                            rel="ProjectReality-Link"
                        > 
                            A mockup website for a VR company<br/>
                            Click here to check it out
                        </a>
                    </div>

                    <div className='Project-Card'>
                        <img src={projectRealityImage} alt="ProjectReality Image" className='Project-Image'></img>
                        <a
                            href='https://projectreality.netlify.app/'
                            rel="ProjectReality-Link"
                        > 
                            A mockup website for a VR company<br/>
                            Click here to check it out
                        </a>
                    </div>
                    
                    
                </div>


            </div>
        </>

    )
}

export default DisplayProjects;
