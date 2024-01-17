interface Props{
    img: any,
    header: string,
    content: string
}

function SpecialtiesTile(props: Props){
    return(
        <div className="SpecialtiesTile">
            <img src={props.img} alt="" />
            <h1>{props.header}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default SpecialtiesTile;