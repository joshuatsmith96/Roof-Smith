import { Link } from 'react-router-dom'

//Import Tiles
import SpecialtiesTile from "./SpecialtiesTile";

//Import Images
import RoofInstallation from '../assets/Images/New Shingles.jpg'
import RoofMaintanence from '../assets/Images/Old Shingles.jpg'
import GutterInstallation from '../assets/Images/Gutters.jpg'

interface Props{
    Header?: string,
    Button?: boolean
}

function Specialties(props: Props){
    let button = document.getElementById("linkButton");
    if(props.Button === true){
        console.log(button)
        button?.setAttribute("class", "linkButton buttonVisible")
    } else {
        console.log("NO")
    }

    return(
        <div className="Specialties">
            <h1>{props.Header}</h1>
            <div className="underline"></div>
            <div className="SpecialtiesTileContainer">
            <SpecialtiesTile Link="/Roof-Smith/Services/Roof-Installation" img={RoofInstallation} header="Roof Installation" content="Get the best bang for you buck! Our experienced roofers will install the best roof the market has to offer. If we mess up, we fix it!"/>
            <SpecialtiesTile Link="/Roof-Smith/Services/Roof-Maintanence" img={RoofMaintanence} header="Roof Maintanence" content="Have some roof damage? Need a quote? We got you covered. Sometimes the price of a whole new roof is too much. Let us repair the damage that is there!"/>
            <SpecialtiesTile Link="/Roof-Smith/Services/Gutter-Installation" img={GutterInstallation} header="Gutter Installation" content="We don’t just do roof installation. We can also install gutter and gutter screens for you. If you’re getting a roof installed, get gutters installed for free!"/>
            </div>
            <Link to="/Services" className='linkButton' id="linkButton">View All Services</Link>
        </div>
    )
}

export default Specialties;