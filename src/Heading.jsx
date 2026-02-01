import './Heading.css'

function HeaderDisplay(){

    return (
        <>
            <div className="heading">
                <div>
                    <a href="#Home" className='heading-buttons'>Home</a>
                    <button className='heading-buttons'>About me</button>
                    <button className='heading-buttons'>My projects</button>
                    <button className='heading-buttons'>Contact me</button>
                    
                </div>
            </div>
            

        </>

    )
}

export default HeaderDisplay;