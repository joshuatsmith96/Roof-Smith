import { Link } from 'react-router-dom'

function LetsTalk(){
    return(
        <div className="LetsTalk">
            <h1>Lets talk about your roof!</h1>
            <p>Call us at 222-222-2222, or click the button below for your free quote today.</p>
            <Link to="/Contact" className='linkButton'>Contact Us</Link>
        </div>
    )
}

export default LetsTalk;