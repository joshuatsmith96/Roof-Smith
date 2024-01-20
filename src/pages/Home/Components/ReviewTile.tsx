import placeholderimage from '../../../assets/Images/Person Placeholder.png'
import Quote from '../../../assets/Images/Quotes.png'

interface Props{
    content: string,
    name: string
}

function ReviewTile(props: Props){
    return(
        <div className="ReviewTile">
            <img src={placeholderimage} alt="" className="ReviewTileImage"/>
            <img src={Quote} alt="" className='QuoteImage'/>
            <p>{props.content}</p>
            <h2>{props.name}</h2>
        </div>
    )
}

export default ReviewTile;