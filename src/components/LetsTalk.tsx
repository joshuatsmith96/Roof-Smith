import { Link } from 'react-router-dom'

function LetsTalk(){
    return(
        <div className="LetsTalk">
            <div className="Hero-Filter"></div>
            <div className="LetsTalkContent">
            <h1>Lets talk about your roof!</h1>
            <p>Call us at 222-222-2222, or click the button below for your free quote today.</p>
            <Link to="/Contact" className='linkButton'>Contact Us</Link>
            </div>
        </div>
    )
}

export default LetsTalk;