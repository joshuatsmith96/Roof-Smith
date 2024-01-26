import Header from "../../../components/Header/Header"

//Image
import House from '../../../assets/Images/HeroRoof.jpg'

function ServicePageTemplate(){
    return(
        <div className="Page ServicePageTemplate">
            <Header Img={House} goBack={true}/>
        </div>
    )
}

export default ServicePageTemplate