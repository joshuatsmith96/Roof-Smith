
interface Props{
    Header: string,
    Img: any,
    Text: string
}

function onTileClick(e:any){
  e.target.parentElement.setAttribute("class", "ChooseUsTile-ImgContainer fall")
}

function ChooseUsTile(props: Props) {

    return (
      <div className="ChooseUsTile">
        <div className="ChooseUsTile-ImgContainer">
        <div className="ChooseUsTile-Clicker" onClick={(e) => onTileClick(e)}></div>
            <img src={props.Img} alt="" />
        </div>
        <h2>{props.Header}</h2>
        <p>{props.Text}</p>
      </div>
    )
  }
  
  export default ChooseUsTile;