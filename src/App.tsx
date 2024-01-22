//Dependencies
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

//Import Components
import Navigation from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

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

  //Review Tiles
  let ReviewTile1 = document.getElementsByClassName("ReviewTile")[0]
  let ReviewTile2 = document.getElementsByClassName("ReviewTile")[1]
  let ReviewTile3 = document.getElementsByClassName("ReviewTile")[2]


  //If scrolling down, do...
  if (newPos > currentPos) {
    //Checking Review Tile 1
    if (checkViewable(ReviewTile1, 600) === true) {
      ReviewTile1.setAttribute("class", "ReviewTile visible swipeLeftAdvanced")
    }

    //Checking Review Tile 2
    if (checkViewable(ReviewTile2, 600) === true) {
      ReviewTile2.setAttribute("class", "ReviewTile visible swipeLeftAdvanced")
    }

    //Checking Review Tile 3
    if (checkViewable(ReviewTile3, 600) === true) {
      ReviewTile3.setAttribute("class", "ReviewTile visible swipeLeftAdvanced")
    }



    //Checking about 1
    if (checkViewable(AboutSectionContent, 1100) === true) {
      AboutSectionContent.setAttribute("class", "AboutSectionContent visible swipeRight")
    }

    //Checking about 2
    if (checkViewable(aboutSectionImage, 700) === true) {
      aboutSectionImage.setAttribute("class", "aboutSectionImage visible swipeLeft")
    }



    //Checking Specialty 1
    if (checkViewable(Spec1, 700) === true) {
      Spec1.setAttribute("class", "SpecialtiesTile visible")
    }

    //Checking Specialty 2
    if (checkViewable(Spec2, 700) === true) {
      Spec2.setAttribute("class", "SpecialtiesTile visible")
    }

    //Checking Specialty 3
    if (checkViewable(Spec3, 700) === true) {
      Spec3.setAttribute("class", "SpecialtiesTile visible")
    }
    //If scrolling up, do...
  } else {
    //Checking Review Tile 1
    if (checkViewable(ReviewTile1, 600) === false) {
      ReviewTile1.setAttribute("class", "ReviewTile")
    }

    //Checking Review Tile 2
    if (checkViewable(ReviewTile2, 600) === false) {
      ReviewTile2.setAttribute("class", "ReviewTile")
    }

    //Checking Review Tile 3
    if (checkViewable(ReviewTile3, 600) === false) {
      ReviewTile3.setAttribute("class", "ReviewTile")
    }





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
          <Route path="/Roof-Smith/" element={<Home />} />
          <Route path="/Roof-Smith/About" element={<About />} />
          <Route path="/Roof-Smith/Services" element={<Services />} />
          <Route path="/Roof-Smith/Projects" element={<Projects />} />
          <Route path="/Roof-Smith/Contact" element={<Contact />} />
        </Routes>
      </ParallaxProvider>
      <Footer />
    </div>
  )
}

export default App
