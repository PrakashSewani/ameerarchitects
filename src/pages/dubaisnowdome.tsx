import NavigationBarComponent from "../components/navigationbarcomponent";
import DubaiLandSnowdome from "../client-images/DubaiLandSnowdome.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DubaiSnowdome() {
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
            <div className="product-name-container-DS">
              <span>Dubai Land Snowdome</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-DS"></div>
          {render && (
            <div className="product-information-container-DS">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={DubaiLandSnowdome} alt="" />
                </div>
              </div>
              <div className="product-text-container-DS">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> Dubailand Snowdome
                    </span>
                  </div>
                  <div className="project-cost">
                    <span>
                      <b>Project Cost:</b> Undisclosed
                    </span>
                  </div>
                </div>
                <div className="p">
                  <span>Project Brief:</span>
                </div>
                <div className="project-brief-container-DS">
                  <span>
                    The dome is designed to be the largest freestanding
                    transparent structure in the world reaching a diameter of
                    200+ metres and a height of 70+ metres. A cable lift taking
                    you at the top of the highest mountain, a rotating ski deck
                    with training area, a mountain run, most exciting snow play
                    area, toboggan run, ice skating rink, ice skating adventure
                    area, ice rink sports area, a flying theatre featuring a
                    virtual flight... Other peripherals included within are a
                    4star Hotel and Iceberg Residences.
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
