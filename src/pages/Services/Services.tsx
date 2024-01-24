import Header from "../../components/Header/Header"
import ServicesImage from '../../assets/Images/Roofing 1.jpg'
import './Services.css'

function Services(){
    return(
        <div className="Services Page">
            <Header Header="Services" Img={ServicesImage}/>
            <div className="ServicesContent">
                <h2>We provide all of your roofing and exterior house needs</h2>
                <p>Although we are primarily a roofing company, that’s not where our services end! Its important to us that we offer more than just one service to our customers.<br /><br />We provide a wide range of exterior home services which include roof installation and repair, gutter installation, window trim replacement, and siding replacement.</p>
            </div>
        </div>
    )
}

export default Services