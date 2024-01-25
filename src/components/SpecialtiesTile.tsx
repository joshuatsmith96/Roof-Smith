import { Link } from 'react-router-dom'

interface Props{
    img: any,
    header: string,
    content: string,
    Link: string
}

function SpecialtiesTile(props: Props){
    return(
        <div className="SpecialtiesTile">
            <Link to={props.Link}>
            <img src={props.img} alt="" />
            </Link>
            <h1>{props.header}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default SpecialtiesTile;