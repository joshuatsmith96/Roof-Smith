import { Link } from 'react-router-dom'

function Hero() {

    return (
        <div className="Hero">
            <div className="HeroImage"></div>
            <div className="Hero-Filter"></div>
            <div className="Hero-Content">
                <p>Since 2005</p>
                <h1>A Roofing Company That Cares</h1>
                <p>Family-run roofing company perfect for your family and home</p>
                <Link to="/About" className='linkButton'>More about us</Link>
            </div>
        </div>
    )
}

export default Hero