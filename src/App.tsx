import React from "react";
import "../src/styles/global.css";
import HomePage from "./pages/homepage";
import ProductsPage from "./pages/projectspage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AugustHouse from "./pages/augusthouse";
import BurjDubaiLakeDevelopement from "./pages/burjdubailakedevelopement";
import DubaiSnowdome from "./pages/dubaisnowdome";
import ResidentialComplex from "./pages/residentialcomplex";
import School from "./pages/school";
import WorliTower from "./pages/worlitower";
import VIPWaterfront from "./pages/vipwaterfront";
import AirThane from "./pages/airthane";
import AnantaTowers from "./pages/anantatowers";
import LionsPark from "./pages/lionpark";
import NorthGate from "./pages/northgate";
import BahrainTC from "./pages/bahrainTC";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="featured-projects" element={<ProductsPage />} />
        <Route path="featured-projects/August-House" element={<AugustHouse/>}/>
        <Route path="featured-projects/Burj-Dubai-Lake-Developement" element={<BurjDubaiLakeDevelopement/>}/>
        <Route path="featured-projects/Dubai-Land-Snowdome" element={<DubaiSnowdome/>}/>
        <Route path="featured-projects/Residential-Complex" element={<ResidentialComplex/>}/>
        <Route path="featured-projects/ETA-SEMS-School" element={<School/>}/>
        <Route path="featured-projects/Worli-Tower" element={<WorliTower/>}/>
        <Route path="featured-projects/VIP-Waterfront" element={<VIPWaterfront/>}/>
        <Route path="featured-projects/Air-Thane" element={<AirThane/>}/>
        <Route path="featured-projects/Ananta-Towers" element={<AnantaTowers/>}/>
        <Route path="featured-projects/Lions-Park" element={<LionsPark/>}/>
        <Route path="featured-projects/North-Gate" element={<NorthGate/>}/>
        <Route path="featured-projects/Bahrain-TradeCenter" element={<BahrainTC/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
