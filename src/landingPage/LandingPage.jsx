
import { CardPlace } from "../component/CardPlace/CardPlace";

import { PopularDestination } from "../component/popular/PopularDestination";

import { CardHotel } from "../component/cardHotel/CardHotel";
import { CardFood } from "../component/cardFood/CardFood";
import { ChatIcon } from "../component/chatBot/ChatIcon";

export const LandingPage = () => {
  return (
    <>
      {/* <NavLandingPage /> */}
      <main className="mt-md-5 mt-xl-0">
        <div id="PlaceCard">
            <CardPlace />
        </div>
        <div id="FoodCard">
            <CardFood />
        </div>
        <div id="HotelCard">
            <CardHotel />
        </div>
        <PopularDestination />
        <ChatIcon />
      </main>

      {/* <Footer /> */}
    </>
  );
};
