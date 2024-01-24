import './Header.css'

interface Props{
    Header: string,
    Img: any
}

function Header(props: Props){
    return (
        <div className="Header">
            <h1>{props.Header}</h1>
            <div className="Hero-Filter Header-Filter"></div>
            <img src={props.Img}/>
        </div>
    )
}

export default Header;