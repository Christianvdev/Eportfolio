import './Heading.css'

function HeaderDisplay(){

    return (
        <>
            <div>


                <div className="heading-end">
                    <div className="button-container">
                        <a href="#home" className='heading-buttons'>Home</a>
                        <a href="#projects" className='heading-buttons'>My projects</a>
                        <a className='heading-buttons'>Contact me</a>
                        <a className='heading-buttons'>About me</a>
                        
                    </div>
                </div>

                <div className="heading-start">
                    <p1> Christian Vaz</p1>
                </div>



            </div>
            
            
            

        </>

    )
}

export default HeaderDisplay;