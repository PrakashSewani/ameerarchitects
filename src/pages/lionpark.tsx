import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationBarComponent from "../components/navigationbarcomponent";
import LionP from "../client-images/lion park.png";

export default function LionsPark() {
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
              <span>Lions Park</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-LP"></div>
          {render && (
            <div className="product-information-container-LP">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={LionP} alt="" />
                </div>
              </div>
              <div className="product-text-container-LP">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> Commercial Complex, Mumbai
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b> Makwana Group
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
                <div className="project-brief-container">
                  <span>
                    The lion park is a part development proposal, in the western
                    subarbs of a luxurious project within a total development of
                    5 acres. The brief was to create multiple level of amenities
                    at the higher levels and create a form which would stand out
                    in the western suburbs as a Modern design and yet have a
                    traditional Indian look infused within the project.
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
