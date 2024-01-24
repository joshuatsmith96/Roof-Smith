import Header from "../components/Header/Header"
import ServicesImage from '../assets/Images/Roofing 1.jpg'

function Services(){
    return(
        <div className="Services Page">
            <Header Header="Services" Img={ServicesImage}/>
        </div>
    )
}

export default Services