import NavigationBarComponent from "../components/navigationbarcomponent";
import tower from "../client-images/WorliTower.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function WorliTower() {
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
              <span>Worli Tower</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-WT"></div>
          {render && (
            <div className="product-information-container-WT">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={tower} alt="" />
                </div>
              </div>
              <div className="product-text-container-WT">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> Residential Skyscraper, Mumbai
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b> Starlight Hospitality
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
                <div className="project-brief-container-WT">
                  <span>
                    Located at one the most sorted out locations in Mumbai, the
                    tower stands on the banks of Arabian Sea. Comprising of
                    super luxury Duplex apartments, I have designed the
                    structure with amenities on various split levels in the form
                    of Business Lounges, Restaurants, Spa&apos;s etc. The form
                    has been carefully designed understanding that although the
                    frontage of the structure is important, the city as such
                    would view the rear-side of this skyscraper. Most of the sea
                    facing buildings in Mumbai overlook this fact and lose on
                    aesthetics. Currently in design stage, a first-cut view is
                    attached.
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
