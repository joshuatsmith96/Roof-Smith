import HouseImage1 from '../../../assets/Images/House 1.jpg';



function AboutTile() {

  return (
    <div className="AboutTile">
      <div className="AboutTile1">
        <div className="AboutHeader">
          <h1 >Roofers by trade.</h1>
          <h1 >Friend of the community.</h1>
        </div>
        <img src={HouseImage1} alt=""/>
        <p>For more than 15 years, we have been serving the Twin Cities area from our home base in Crystal, MN. What started as 2 brothers and an old moving van, has quickly turned into over 50 roofers and a fleet of brand new vehicles and equipment!<br /><br />If you’re interested in a roofing company that knows what you need, then look no further! Please give us a call at 222-222-2222 and we can go through your needs together.</p>
      </div>
      <div className="AboutTile2">
        <div className="AboutSection1">
          <div className="AboutHeader">
            <h1 >Roofers by trade.</h1>
            <h1 >Friend of the community.</h1>
          </div>
          <p>For more than 15 years, we have been serving the Twin Cities area from our home base in Crystal, MN. What started as 2 brothers and an old moving van, has quickly turned into over 50 roofers and a fleet of brand new vehicles and equipment!<br /><br />If you’re interested in a roofing company that knows what you need, then look no further! Please give us a call at 222-222-2222 and we can go through your needs together.</p>
        </div>
        <img src={HouseImage1} alt=""/>
      </div>
    </div>
  )
}

export default AboutTile;
