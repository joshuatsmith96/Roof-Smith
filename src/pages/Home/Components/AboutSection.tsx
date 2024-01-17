import house from '../../../assets/Images/House 1.jpg'

function AboutSection() {
    return (
        <div className="AboutSection">
            <img src={house} alt="" className="aboutSectionImage"/>
            <div className="AboutSectionContent" id="AboutSectionContent">
                <h1>More than 15 years in the business</h1>
                <p>Roof Smith Roofing has been a staple within the community of Crystal MN for over 15 years. We have seen everything from hail and tornado damage, to lightning damage. Our customers are what makes our jobs one of the best out there.<br /><br />
                    The thing that sets Roof Smith apart from competitors is their ethics. Founded in 2005 by brothers John and Lance, they sought to create a company that was honest, fair, and as affordable as possible. They understand the needs of their customers and strive to meet those needs.
                </p>
            </div>
        </div>
    )
}

export default AboutSection;