import "./slide1.scss";
import ImageCard from "../imageCard/ImageCard.jsx";

export default function Slide1() {
  return (
    <div className="slide1">
      <div className="left">
        <h1>11 April 2020 at 10:19 PM </h1>
        <p>
          This was our first contact, thus, I recieved my happiness with that.
          Having you is a <span> devine blessing </span>, I apreciate every
          single second I spent with you. In fact..., <span> I Love You </span>
        </p>

        <div className="mob">
          <img src="assets/mob.png" />
        </div>
      </div>

      <div className="right">
        <div className="row1">
          <div className="image1">
            <ImageCard image={"assets/1.jpg"} desc="Brihicha dyali" />
          </div>

          <div className="image2">
            <ImageCard image={"assets/2.jpg"} desc="Khnicha m9t3a ch3rha" />
          </div>
        </div>

        <div className="row2">
          <div className="image3">
            <ImageCard image={"assets/3.jpg"} desc="Ch3oraaaat" />
          </div>
        </div>

        <div className="row3">
          <div className="image4">
            <ImageCard image={"assets/4.jpg"} desc="BB dlili7aa" />
          </div>

          <div className="image5">
            <ImageCard image={"assets/5.jpg"} desc="Zin lghzal" />
          </div>
        </div>
      </div>
    </div>
  );
}
