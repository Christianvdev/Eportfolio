import './Heading.css'

function HeaderDisplay(){

    return (
        <>
            <div className="heading">
                <div className="button-container">
                    <a href="#home" className='heading-buttons'>Home</a>
                    <a href="#projects" className='heading-buttons'>My projects</a>
                    <a className='heading-buttons'>Contact me</a>
                    <a className='heading-buttons'>About me</a>
                    
                </div>
            </div>
            

        </>

    )
}

export default HeaderDisplay;