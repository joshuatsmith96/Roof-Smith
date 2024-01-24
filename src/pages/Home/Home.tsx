import './Home.css'
import '../../Animations.css'
//Components
import Hero from "./Components/Hero"
import Specialties from './Components/Specialties'
import AboutSection from './Components/AboutSection'
import LetsTalk from '../../components/LetsTalk'
import ReviewSection from './Components/ReviewSection'


function Home(){
    return(
        <div className="Home">
            <Hero />
            <Specialties />
            <AboutSection />
            <LetsTalk />
            <ReviewSection />
        </div>
    )
}

export default Home