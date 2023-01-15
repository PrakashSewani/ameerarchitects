import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HomePageComponent from "../components/homepagecomponent";
import NavigationBarComponent from "../components/navigationbarcomponent";

export default function HomePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavigationBarComponent />
      <HomePageComponent />
    </>
  );
}
