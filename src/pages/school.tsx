import NavigationBarComponent from "../components/navigationbarcomponent";
import ETASchool from "../client-images/ETASEMSSchool.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function School() {
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
            <div className="product-name-container-sc">
              <span>ETA SEMS School</span>
            </div>
          </div>
        )}
        <div className="product-blueprint-wrapper">
          <div className="product-blueprint-container-SCHOOL"></div>
          {render && (
            <div className="product-information-container-sc">
              <div className="product-image-container">
                <div className="image-con">
                  <img src={ETASchool} alt="" />
                </div>
              </div>
              <div className="product-text-container">
                <div className="padding-div">
                  <div className="project-type">
                    <span>
                      <b>Project:</b> Private School in Mirdif, Dubai
                    </span>
                  </div>
                  <div className="client">
                    <span>
                      <b>Client:</b> Mrs Maryam Salahuddin (ETA SEMS)
                    </span>
                  </div>
                  <div className="project-cost">
                    <span>
                      <b>Project Cost:</b> 82 Million Dhs
                    </span>
                  </div>
                </div>
                <div className="p">
                  <span>Project Brief:</span>
                </div>
                <div className="project-brief-container-SCHOOL">
                  <span>
                    There were 2 significant issues to be handled in the
                    development of this project. First, the general concept was
                    to provide a schooling facility which would encompass around
                    2 focal structures of a multipurpose hall and an auditorium.
                    Keeping in mind both these were sound generating zones,
                    providing classrooms around its periphery needed us to study
                    various materials and modes of construction to achieve this
                    task. Secondly, the plot had access from opposite sides and
                    had a level difference of 3.5 Meters which was to be
                    adjusted within the plot via design parameters. I even had
                    to manage the basic drainage in accordance with this level
                    difference. I was the Project architect for the School and
                    had managed it entirely with external Mechanical and
                    Structural teams. We needed to complete the project prior to
                    the school opening date which was fixed for the city and
                    hence it was challenging to attain solutions, approvals,
                    permits, floating tenders etc within the stipulated time
                    frame.
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
