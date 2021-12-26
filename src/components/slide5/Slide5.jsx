import "./slide5.scss";
import ImageCard from "../imageCard/ImageCard";

export default function Slide5() {
  return (
    <div className="slide5">
      <div className="one">
        <div className="image1">
          <ImageCard image={"assets/7.jpg"} desc="Brihicha dyali" />
        </div>
      </div>
      <div className="mid">
        <h1>Fa9rat i3tirafaaaat ya bb</h1>
        <div>
          First of all, kandir hadchi b7it kanbghik, ou bghit n5elli une trace
          3la had les 2ans li dwznaha ensemble
        </div>
        <div>
          kantmenna mn lah ytwl lina fl3mer 7ta ntla9aw, may be had le point
          ykoun dérangeant, mais 7as bli 9rib inchaalah ntla9aw
        </div>
        <div>
          Hadchi kandiro men 9elbi wrebi li 3alm bch7al dyal lfer7a wana kan9ad
          lik chi l3iba li t9der tfer7ak adik lbnt
        </div>
        <div>
          Nti wa7ad lbnita li makaynch b7alk wlah, ou bghit ndwez m3ak 7yati
          kamla azzin lghzal, kan7ma9 3lik abb dyali.
        </div>
      </div>

      <div className="two">
        <div className="image2">
          <ImageCard image={"assets/6.jpg"} desc="Brihicha dyali" />
        </div>
      </div>
    </div>
  );
}
