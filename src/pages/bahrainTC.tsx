import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationBarComponent from "../components/navigationbarcomponent";
import btc from "../client-images/BahrainTradeCenter.png";

export default function BahrainTC() {
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
            <div className="product-name-container-BTC">
              <span>Bahrain Trade Center</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-BTC"></div>
          {render && (
            <div className="product-information-container-BTC">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={btc} alt="" />
                </div>
              </div>
              <div className="product-text-container-BTC">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> Bahrain Trade Center, Bahrain
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
                    Briefly associated with The Bahrain World Trade Center (also
                    called Bahrain WTC or BWTC). It is a 240-metre-high (787
                    ft), 50-floor, twin tower complex located in Manama,
                    Bahrain. It is the first skyscraper in the world to
                    integrate wind turbines into its design.
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
