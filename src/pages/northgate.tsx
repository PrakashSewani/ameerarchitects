import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationBarComponent from "../components/navigationbarcomponent";
import norGate from "../client-images/NorthGateTower.jpg";

export default function NorthGate() {
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
              <span>North Gate Tower</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-NGT"></div>
          {render && (
            <div className="product-information-container-NGT">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={norGate} alt="" />
                </div>
              </div>
              <div className="product-text-container-NGT">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> 6B+G+4P+26 Floors
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b> Mr Adil Dean (Gulf line International)
                    </span>
                  </div>
                  <div className="project-cost">
                    <span>
                      <b>Project Cost:</b> 220 Million Dhs
                    </span>
                  </div>
                </div>
                <div className="p">
                  <span>Project Brief:</span>
                </div>
                <div className="project-brief-container">
                  <span>
                    Located in Downtown Jebel Ali, this 26 storey structure is a
                    Commercial Tower. Currently awaiting an Army NOC for its
                    location being adjacent to UAE army zone, it has been
                    Managed by me through its Schematic and Detailed design
                    stages. For this project I have dealt with Ellisdon as a
                    master planner and getting a preliminary approval from those
                    authorities was currently dealing with JAFZA to get a
                    building permit. For the same a Mechanical and Structural
                    solution has been devised and approved by me and the client.
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
