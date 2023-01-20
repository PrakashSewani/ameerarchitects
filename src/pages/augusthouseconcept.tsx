import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationBarComponent from "../components/navigationbarcomponent";
import acConcept from "../client-images/august concept 2.png";

export default function AugustHoueConcept() {
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
            <div className="product-name-container-AHC">
              <span>August House (concept)</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-AHC"></div>
          {render && (
            <div className="product-information-container-AHC">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={acConcept} alt="" />
                </div>
              </div>
              <div className="product-text-container">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> Commercial Complex, Mumbai
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b> Dheeraj Realty
                    </span>
                  </div>
                  <div className="project-cost">
                    <span>
                      <b>Project Cost:</b> 30 Crores
                    </span>
                  </div>
                </div>
                <div className="p">
                  <span>Project Brief:</span>
                </div>
                <div className="project-brief-container">
                  <span>
                    Initially planned on a rectangular plot envelope, was
                    devised to house a Ministry of Education Corporate setup.
                    Keeping in line with the very theme of the project, had
                    designed the structure to correlate with a n opened book in
                    its form. Simplistic, Representative in nature and a
                    landmark in its conceptualization. Terrace yet again to
                    stand out of the rest, when viewed aerially.
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
