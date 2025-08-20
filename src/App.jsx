import { useState } from "react";
// import './App.css'
import { LandingPage } from "./landingPage/LandingPage";
import { PopularDestination } from "./component/popular/PopularDestination";
import { PlaceDescription } from "./component/cardPlace/PlaceDescription";
import { Route, Routes } from "react-router"
import { Layout } from "./Layout";
import { HotelDescription } from "./component/cardHotel/HotelDescription";
import { CulinerDescription } from "./component/cardFood/CulinerDescription";

function App() {
  return (
    <>
    {/* <LandingPage /> */}
      {/* <PopularDestination /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/places/description/:name" element={<PlaceDescription />} />
          <Route path="/hotel/description/:name" element={<HotelDescription />} />
          <Route path="/food/description/:name" element={<CulinerDescription />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
