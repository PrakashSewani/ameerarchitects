import NavigationBarComponent from "../components/navigationbarcomponent";
import BurjLake from "../client-images/BurjDubaiLakeDevelopement.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BurjDubaiLakeDevelopement() {
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
            <div className="product-name-container-BL">
              <span>Burj Dubai Lake Development Hotel</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-BL"></div>
          {render && (
            <div className="product-information-container-BL">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={BurjLake} alt="" />
                </div>
              </div>
              <div className="product-text-container-BL">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> 63 Storeys Residential cum Hospitality
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b>
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
                <div className="project-brief-container-BL">
                  <span>
                    The Burj Dubai Lake Hotel is a residential cum hospitality
                    component of the AED 73 billion (US$20 billion) Downtown
                    Burj Dubai, which encompasses the Burj Khalifa. Under the
                    flagship of Atkins the entire project has been detailed to
                    create a 306m super-tall skyscraper in the form of 63
                    storeys. Designed in form to compliment the Burj Khalifa,
                    the crown of this structure was revised numerous times even
                    through its construction. Multi-levelled basements were used
                    to house a complex circulation of hospitality services.
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
