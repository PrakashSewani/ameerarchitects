import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationBarComponent from "../components/navigationbarcomponent";
import anantaT from "../client-images/ananta.png";

export default function AnantaTowers() {
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
              <span>Ananta Towers</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-AnaT"></div>
          {render && (
            <div className="product-information-container-AnaT">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={anantaT} alt="" />
                </div>
              </div>
              <div className="product-text-container-AnaT">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> Ananta Towers
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b> Sagar Developer
                    </span>
                  </div>
                  <div className="project-cost">
                    <span>
                      <b>Project Cost:</b> 450 Crores Plus
                    </span>
                  </div>
                </div>
                <div className="p">
                  <span>Project Brief:</span>
                </div>
                <div className="project-brief-container">
                  <span>
                    With Four 40 Storey high rise towers, this project has a
                    large landscaped terrace atop a line up of commercial
                    outlets. Ananta, is a project in close proximity to a
                    renowned Jain mandir and thus the name which has attracted
                    many buyer from the said community. The demand of the
                    project was to have a form which although looks complex has
                    been devised to get executed through Mivan technology.
                    Further, we had to infuse penthouses within the project, for
                    which we have a created a crown to work with the aesthetics
                    and wind movement at that altitude.
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
