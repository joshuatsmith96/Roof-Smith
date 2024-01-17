//Dependencies
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

//Import Components
import Navigation from './components/Nav/Nav'

//Import Pages
import Home from './pages/Home/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'



//Scroll Affects
let currentPos = window.scrollY;
let bodyRect = document.body.getBoundingClientRect()

function checkViewable(el: any, speed: any) {
  let elemRect = el.getBoundingClientRect();
  let offset = (elemRect.top - bodyRect.top) - speed;
  if (offset <= 0) {
    return (true)
  } else {
    return (false)
  }
}


//Checks everytime scrolling is done
window.addEventListener("scroll", function () {
  let newPos = window.scrollY;

  //Specialties Tiles
  let Spec1 = document.getElementsByClassName("SpecialtiesTile")[0]
  let Spec2 = document.getElementsByClassName("SpecialtiesTile")[1]
  let Spec3 = document.getElementsByClassName("SpecialtiesTile")[2]

  //About Tiles
  let AboutSectionContent = document.getElementsByClassName("AboutSectionContent")[0]
  let aboutSectionImage = document.getElementsByClassName("aboutSectionImage")[0]


  //If scrolling down, do...
  if (newPos > currentPos) {
    //Checking about 1
    if (checkViewable(AboutSectionContent, 400) === true) {
      AboutSectionContent.setAttribute("class", "AboutSectionContent visible swipeRight")
    }

    //Checking about 2
    if (checkViewable(aboutSectionImage, 400) === true) {
      aboutSectionImage.setAttribute("class", "aboutSectionImage visible swipeLeft")
    }

    //Checking Specialty 1
    if (checkViewable(Spec1, 300) === true) {
      Spec1.setAttribute("class", "SpecialtiesTile visible")
    }

    //Checking Specialty 2
    if (checkViewable(Spec2, 300) === true) {
      Spec2.setAttribute("class", "SpecialtiesTile visible")
    }

    //Checking Specialty 3
    if (checkViewable(Spec3, 300) === true) {
      Spec3.setAttribute("class", "SpecialtiesTile visible")
    }
    //If scrolling up, do...
  } else {
    //Checking about 1
    if (checkViewable(AboutSectionContent, 600) === false) {
      AboutSectionContent.setAttribute("class", "AboutSectionContent")
    }

    //Checking about 2
    if (checkViewable(aboutSectionImage, 600) === false) {
      aboutSectionImage.setAttribute("class", "aboutSectionImage")
    }

    //Checking Specialty 1
    if (checkViewable(Spec1, 600) !== true) {
      Spec1.setAttribute("class", "SpecialtiesTile")
    }

    //Checking Specialty 2
    if (checkViewable(Spec2, 600) !== true) {
      Spec2.setAttribute("class", "SpecialtiesTile")
    }

    //Checking Specialty 3
    if (checkViewable(Spec3, 600) !== true) {
      Spec3.setAttribute("class", "SpecialtiesTile")
    }
  }
  currentPos = newPos
})





















function App() {

  return (
    <div className="App">
      <Navigation />
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </ParallaxProvider>
    </div>
  )
}

export default App
