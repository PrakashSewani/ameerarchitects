import AugustHouse from "../client-images/AugustHouse.jpg";
import BahrainTC from "../client-images/BahrainTradeCenter.png";
import BurjDubaiLakeDevelopement from "../client-images/BurjDubaiLakeDevelopement.jpg";
import DubaiLandSnowdome from "../client-images/DubaiLandSnowdome.jpg";
import NorthGateTower from "../client-images/NorthGateTower.jpg";
import ResidentialComplex from "../client-images/ResidentialComplex.jpg";
import ETASEMSSchool from "../client-images/ETASEMSSchool.jpg";
import VIPWaterfront from "../client-images/VIPWaterfront.jpg";
import WorliTower from "../client-images/WorliTower.jpg";
import lionpark from "../client-images/lion park.png";
import ananta from "../client-images/ananta.png";
import airthane from "../client-images/air thane .png";
import augustConcept from "../client-images/august concept 1.png";

import { useNavigate } from "react-router-dom";

export default function ProductsComponent() {
  const navigate = useNavigate();
  return (
    <>
      <div className="click-wrapper">
        <div className="text-wrapper">
          <span>Featured Projects</span>
        </div>
        <div className="tex-wrap">
          <span>Click on the project to know more about it</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <div
            onClick={() => navigate("Dubai-Land-Snowdome")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={DubaiLandSnowdome} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>Dubai Snowdome</span>
              </div>
              <div className="project-location">
                <span>Dubai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("Burj-Dubai-Lake-Developement")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img
                  src={BurjDubaiLakeDevelopement}
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span> The Address, Burj Dubai Lake Developement</span>
              </div>
              <div className="project-location">
                <span>Dubai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("VIP-Waterfront")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={VIPWaterfront} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>VIP Waterfront</span>
              </div>
              <div className="project-location">
                <span>Dubai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("Air-Thane")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={airthane} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>Air Thane</span>
              </div>
              <div className="project-location">
                <span>Thane, Mumbai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("Ananta-Towers")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={ananta} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>Ananta Towers</span>
              </div>
              <div className="project-location">
                <span>Mumbai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("Lions-Park")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={lionpark} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>Lions Park</span>
              </div>
              <div className="project-location">
                <span>Mumbai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("North-Gate")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={NorthGateTower} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>North Gate</span>
              </div>
              <div className="project-location">
                <span>Downtown Jebel Ali</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("Worli-Tower")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={WorliTower} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>Worli Tower</span>
              </div>
              <div className="project-location">
                <span>Worli, Mumbai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("ETA-SEMS-School")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={ETASEMSSchool} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>ETA SEMS School</span>
              </div>
              <div className="project-location">
                <span>Mirdif, Dubai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("Bahrain-TradeCenter")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={BahrainTC} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>Bahrain Trade Center</span>
              </div>
              <div className="project-location">
                <span>Bahrain</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("August-House-Concept")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={augustConcept} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>August House</span>
              </div>
              <div className="project-location">
                <span>Mumbai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("August-House")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={AugustHouse} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>August House</span>
              </div>
              <div className="project-location">
                <span>Mumbai</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("Residential-Complex")}
            className="project-container"
          >
            <div className="image-container">
              <div className="images">
                <img src={ResidentialComplex} alt="" width={500} height={500} />
              </div>
            </div>
            <div className="project-name-container">
              <div className="project-name-wrapper">
                <span>Residential Complex</span>
              </div>
              <div className="project-location">
                <span>Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
