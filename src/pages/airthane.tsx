import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationBarComponent from "../components/navigationbarcomponent";
import airtane from "../client-images/air thane .png";

export default function AirThane() {
  const { pathname } = useLocation();
  const [render, setRender] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1500);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavigationBarComponent />
      <div className="product-page-body">
        {render && (
          <div className="product-name-wrapper">
            <div className="product-name-container">
              <span>Air Thane</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-AT"></div>
          {render && (
            <div className="product-information-container-AT">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={airtane} alt="" />
                </div>
              </div>
              <div className="product-text-container-AT">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> Air Thane, Mumbai
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b> Q Group
                    </span>
                  </div>
                  <div className="project-cost">
                    <span>
                      <b>Project Cost:</b> 400 Crores Plus
                    </span>
                  </div>
                </div>
                <div className="p">
                  <span>Project Brief:</span>
                </div>
                <div className="project-brief-container">
                  <span>
                    Three 44 Storey high rise towers merged to create a single
                    dynamic form signifying the movement of air. The projects
                    boasts to have Health as it’s fundamentals in terms of
                    offerings. A participant in numerous Architectural awards,
                    Air Thane is set to change the Skyine of Thane region at the
                    time of it’s launch. It is a mixed use development which
                    comprises of High street type retail outlets and ALL
                    residences with Panoramic living rooms.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
