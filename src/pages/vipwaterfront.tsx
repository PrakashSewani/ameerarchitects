import NavigationBarComponent from "../components/navigationbarcomponent";
import VPWF from "../client-images/VIPWaterfront.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VIPWaterfront() {
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
              <span>VIP Waterfront</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-WF"></div>
          {render && (
            <div className="product-information-container-WF">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={VPWF} alt="" />
                </div>
              </div>
              <div className="product-text-container">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> 46Flrs Hotels and Commercial Zone
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b> Mr Vitelli (VIP Waterfront Real Estate)
                    </span>
                  </div>
                  <div className="project-cost">
                    <span>
                      <b>Project Cost:</b> Estimated Above 1 Billion Dhs
                    </span>
                  </div>
                </div>
                <div className="p">
                  <span>Project Brief:</span>
                </div>
                <div className="project-brief-container">
                  <span>
                    This is an iconic project of unreal proportions. The project
                    brief itself was a challenge wherein we needed to Design
                    Hotels and Commercial Towers on 2 similar plots, erected on
                    top of a Shopping Mall which spanned further ahead of the
                    hotel floor plate. I then had to provide Villa&apos;s and
                    Chalets on top of the mall and in front of the Hotel Towers.
                    Finally there is a Palace devised in front of the facade and
                    the entire premise had a waterfront view hence the name of
                    the project. It was challenging as a result of the various
                    functions allotted to a single site and furthermore it had
                    just one side of the plot for all the accesses and yet were
                    to be exclusively defined as per their zones. We had
                    completed its schematic Mechanical and Structural design
                    post a preliminary design approval from JAFZA.
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
