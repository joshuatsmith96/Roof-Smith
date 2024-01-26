import './Header.css'
import { Link } from 'react-router-dom'

interface Props{
    Header?: string,
    Img: any,
    goBack?: any
}

function Header(props: Props){

    if(props.goBack === true){
        console.log("True")
        
    }

    return (
        <div className="Header">
            <div className="goBackButton" id="goBackButton">
                <Link to="/Roof-Smith/Services">&crarr; Go Back</Link>
            </div>
            <h1>{props.Header}</h1>
            <div className="Hero-Filter Header-Filter"></div>
            <img src={props.Img}/>
        </div>
    )
}

export default Header;