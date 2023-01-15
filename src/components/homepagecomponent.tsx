import { Link } from "react-router-dom";

export default function HomePageComponent() {
  return (
    <>
      <div className="home-image-container">
        <div className="image-div"></div>
      </div>
      <div className="homepage-block">
        <div className="box">
          <div className="center-box">
            <span style={{ lineHeight: 1.5 }}>
              Meanwhile look at our{" "}
              <Link to="/featured-projects">
                <button>Current Projects</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
