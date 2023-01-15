import NavigationBarComponent from "../components/navigationbarcomponent";
import resident from "../client-images/ResidentialComplex.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ResidentialComplex() {
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
            <div className="product-name-container-RC">
              <span>Residential Complex</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-RC"></div>
          {render && (
            <div className="product-information-container-RC">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={resident} alt="" />
                </div>
              </div>
              <div className="product-text-container-RC">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> Residential Complex, Mumbai
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b> RKW Developers
                    </span>
                  </div>
                  <div className="project-cost">
                    <span>
                      <b>Project Cost:</b> 250 Crores
                    </span>
                  </div>
                </div>
                <div className="p">
                  <span>Project Brief:</span>
                </div>
                <div className="project-brief-container">
                  <span>
                    Located bank opposite the Chembur Golf Club, is one of the
                    largest Residential composite developments in Mumbai. A
                    Mixed-Use structure, has 3 BHK , 2.5 BHK and 2BHK apartments
                    designed in a peripheral format to optimize their individual
                    views. A part of SRA, Slum Rehabilitation Authority, we are
                    currently executing the Rehab Structure, which when
                    physically executed provides FSI for your sale component.
                    These projects are always complex and require a knowledge of
                    various Municipal facets to develop design. Specially
                    collective services and mode of construction.
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
