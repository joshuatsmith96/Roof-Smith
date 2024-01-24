interface Props{
    Image: any,
    Name: string,
    Title: string
}

function MeetTheTeamTile(props: Props) {
    return (
      <div className="MeetTheTeamTile">
          <img src={props.Image} className="MeetTheTeam-Image"/>
          <span className="blackfilter"></span>
          <h1>{props.Name}</h1>
          <p>{props.Title}</p>
      </div>
    )
  }
  
  export default MeetTheTeamTile
  