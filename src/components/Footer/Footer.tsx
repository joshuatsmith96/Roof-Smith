import './Footer.css'
import { Link } from 'react-router-dom'

//Social Media Images
import X from '../../assets/Images/x.png'
import LinkedIn from '../../assets/Images/linkedin-icon-2048x2048-ya5g47j2.png'
import Facebook from '../../assets/Images/facebook-logo-circle-transparent.png'

function Footer(){
    return(
        <div className="Footer">
            <div className="Footer-Content">
                <ul className='Footer-Nav'>
                    <li><Link to="/Roof-Smith/">Home</Link></li>
                    <li><Link to="/Roof-Smith/About">About Us</Link></li>
                    <li><Link to="/Roof-Smith/Services">Services</Link></li>
                    <li><Link to="/Roof-Smith/Projects">Projects</Link></li>
                    <li><Link to="/Roof-Smith/Contact">Contact</Link></li>
                </ul>
                <div className="Footer-Contact">
                    <h2>Contact us at:</h2>
                     <p>222-22-2222</p>
                     <p>roofsmith@gmail.com</p><br/>
                     <p>12345 Example Drive</p>
                     <p>Minneapolis, MN 55555</p>
                </div>
                <div className="Footer-Buttons">
                    <Link to="/Contact" className='Footer-Quote-Button'>Get a Quote</Link>
                    <div className="SocialButtons">
                        <img src={X} alt="" />
                        <img src={LinkedIn} alt="" />
                        <img src={Facebook} alt="" />
                    </div>
                </div>
            </div>
            <div className="Footer-Filter"></div>
        </div>
    )
}

export default Footer