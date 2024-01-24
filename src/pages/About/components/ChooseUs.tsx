//Components
import ChooseUsTile from "./ChooseUsTile";

//Images
import UnionImage from '../../../assets/Images/Union.png'
import HonestyImage from '../../../assets/Images/Honesty.png'
import QualityImage from '../../../assets/Images/Materials.png'
import AffordableImage from '../../../assets/Images/Affordable.png'
import BuildingIcon from '../../../assets/Images/building icon.png'

function ChooseUs() {

  return (
    <div className="ChooseUs">
      <img src={BuildingIcon} alt="" className="ChooseUsImage"/>
      <h1>Why Choose Us</h1>
      <div className="ChooseUsContainer">
      <div className="Col">
        <ChooseUsTile Img={UnionImage} Header="Union Company" Text="Because we are a workers union, we have happy employees and minimal accidents! We are proud to be a company that supports our workers."/>
        <ChooseUsTile Img={HonestyImage} Header="We're Honest" Text="It might seem like something that shouldn’t have to be mentioned, but there are a lot of dishonest and scammy businesses out there. You can rest easy knowing that we will get the job done RIGHT!"/>
      </div>
      <div className="Col">
      <ChooseUsTile Img={QualityImage} Header="Quality Materials" Text="Some competitors choose to use cheap, untrustworthy materials while still charging you an arm and a leg! We find the best materials on the market."/>
        <ChooseUsTile Img={AffordableImage} Header="Affordability" Text="We understand that money is pretty hard to come by. Thats why we go over your options, from cheapest to most expensive, to find one that suites your budget."/>
      </div>
      </div>
      
    </div>
  )
}

export default ChooseUs;