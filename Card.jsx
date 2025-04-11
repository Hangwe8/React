import profilePic from './assets/Profile.jpg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic}alt="profile picture"></img>
            <h2>HRN</h2>
            <p>I make CV's and play cars</p>

        </div>
    );
}

export default Card;