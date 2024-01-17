import { Link } from 'react-router-dom'

//Import Tiles
import SpecialtiesTile from "./SpecialtiesTile";

//Import Images
import RoofInstallation from '../../../assets/Images/New Shingles.jpg'
import RoofMaintanence from '../../../assets/Images/Old Shingles.jpg'
import GutterInstallation from '../../../assets/Images/Gutters.jpg'



function Specialties(){
    return(
        <div className="Specialties">
            <h1>Our Specialities</h1>
            <div className="underline"></div>
            <div className="SpecialtiesTileContainer">
            <SpecialtiesTile img={RoofInstallation} header="Roof Installation" content="Get the best bang for you buck! Our experienced roofers will install the best roof the market has to offer. If we mess up, we fix it!"/>
            <SpecialtiesTile img={RoofMaintanence} header="Roof Maintanence" content="Have some roof damage? Need a quote? We got you covered. Sometimes the price of a whole new roof is too much. Let us repair the damage that is there!"/>
            <SpecialtiesTile img={GutterInstallation} header="Gutter Installation" content="We don’t just do roof installation. We can also install gutter and gutter screens for you. If you’re getting a roof installed, get gutters installed for free!"/>
            </div>
            <Link to="/Services" className='linkButton'>View All Services</Link>
        </div>
    )
}

export default Specialties;