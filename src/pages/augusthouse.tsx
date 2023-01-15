import NavigationBarComponent from "../components/navigationbarcomponent";
import August from "../client-images/AugustHouse.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AugustHouse() {
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
              <span>August House</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-AH"></div>
          {render && (
            <div className="product-information-container">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={August} alt="" />
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
                    Located at one of the most sort after locations in the
                    suburbs of Mumbai, August House is a Commercial Complex 5
                    minutes from the Mumbai International Airport and at hands
                    reach from the Western Express Highway. The basic thought
                    process in designing this structure was to create a landmark
                    structure, with a simplistic approach. Basic forms were
                    adopted by me to device this form. Further, not losing onto
                    valuable permissible floor plate area&apos;s are crucial in
                    the city dominated by FSI and height restriction. Since
                    every project out here have restricted X,Y & Z axis,
                    designing interesting elevations are quite challenging,
                    where reducing floor plates too isn&apos;t an option. The
                    proximity of this structure to the international airport
                    made me device a Terrace which would leave an impact on
                    every flyer as seen airborne.
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
