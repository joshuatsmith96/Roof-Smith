import MeetTheTeamTile from "./MeetTheTeamTile"

//Images
import Guy1 from '../../../assets/Images/guy1.jpg'
import Guy2 from '../../../assets/Images/guy2.jpg'
import Girl1 from '../../../assets/Images/girl1.jpg'

function MeetTheTeam() {

  return (
    <div className="MeetTheTeam">
        <MeetTheTeamTile Image={Guy1} Name="John Smith" Title="CO-CEO / FOUNDER"/>
        <MeetTheTeamTile Image={Guy2} Name="Lance Smith" Title="CO-CEO / FOUNDER"/>
        <MeetTheTeamTile Image={Girl1} Name="Brenda Lee" Title="HUMAN RESOURCES"/>
    </div>
  )
}

export default MeetTheTeam
