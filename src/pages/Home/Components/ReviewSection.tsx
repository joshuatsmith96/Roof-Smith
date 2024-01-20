import ReviewTile from "./ReviewTile";

function ReviewSection(){
    return(
        <div className="ReviewSection">
            <ReviewTile content="The were fast, efficient and the quality of work was fantastic! I will definitely go to them again." name="Luke Sumerset"/>
            <ReviewTile content="We had roof damage from the recent storm that came through. They gave us a special price given the circumstances." name="Hank Freeman"/>
            <ReviewTile content="My insurance company was giving me the run-around. Roof Smith actually talked to my insurance for me and got it covered!" name="Andrea Babbins"/>
        </div>
    )
}

export default ReviewSection;