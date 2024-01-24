
interface Props{
    Header: string,
    Img: any,
    Text: string
}

function ChooseUsTile(props: Props) {

    return (
      <div className="ChooseUsTile">
        <div className="ChooseUsTile-ImgContainer">
            <img src={props.Img} alt="" />
        </div>
        <h2>{props.Header}</h2>
        <p>{props.Text}</p>
      </div>
    )
  }
  
  export default ChooseUsTile;