import '../../Animations.css'
import './About.css'

//Components
import Header from '../../components/Header/Header';
import AboutTile from './components/AboutTile';
import ChooseUs from './components/ChooseUs';
import LetsTalk from '../../components/LetsTalk';
import MeetTheTeam from './components/MeetTheTeam';


//Images
import AboutImage from '../../assets/Images/aboutus.jpg'

function About() {

  return (
    <div className="About Page">
      <Header Header='About' Img={AboutImage}/>
      <AboutTile />
      <ChooseUs />
      <LetsTalk />
      <MeetTheTeam />
    </div>
  )
}

export default About
