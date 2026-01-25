import projectRealityImage from './assets/ProjectReality.png'
import './Projects.css'
function DisplayProjects(){
    return (
        <>
            <div>

                <div className='Intro-Section'>
                    <h1>Projects</h1>
                </div>

                <div className='Projects-Display'>

                    <div>
                        <img src={projectRealityImage} alt="ProjectReality Image" className='Project-Image'></img>
                        <p>A mockup Demo VR site</p>
                    </div>
                    <div>
                        <img src={projectRealityImage} alt="ProjectReality Image" className='Project-Image'></img>
                        <p>A mockup Demo VR site</p>
                    </div>
                    <div>
                        <img src={projectRealityImage} alt="ProjectReality Image" className='Project-Image'></img>
                        <p>A mockup Demo VR site</p>
                    </div>
                    
                    
                </div>


            </div>
        </>

    )
}

export default DisplayProjects;