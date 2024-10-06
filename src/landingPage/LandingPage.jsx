import { Hero } from "../component/hero/Hero"
import { NavLandingPage } from "../component/navbar/NavLandingPage"
import { CardPlace } from "../component/cardPlace/CardPlace"
import Banner from "../assets/banner.jpeg"
import { CardFood } from "../component/cardFood/CardFood"
import { Footer } from "../component/footer/Footer"
import { DescFood } from "../component/Description/DescFood"
import kopi from '../assets/kopiKlothok.jpg'
import { CardHotel } from "../component/cardHotel/CardHotel"
import { ChatIcon } from "../component/chatBot/ChatIcon"

export const LandingPage = () => {
    return(
        <>
       
        <NavLandingPage />
        <main className='mt-md-5 mt-xl-0'>
             <CardPlace />
             <CardFood />
             <CardHotel />
             <ChatIcon />

        {/* <DescFood 
            idSection={'mainHero'}
            isReverse={false}
            image={kopi}
            heading="Kopi Klothok"
            text="Pengunjung dapat menikmati sajian kopi dan makanan khas desa sambil dikelilingi pemandangan sawah dan Gunung Merapi. Warung ini mengusung arsitektur tradisional Jawa, memberikan pengalaman kuliner yang otentik dan nyaman.."
            maxWTitle={'41.625rem'}
            location="Jalan Kaliurang Km 16, Area Sawah, Pakembinangun, Kec. Pakem, Kabupaten Sleman, Daerah Istimewa Yogyakarta"
            Parking="Tersedia Tempat Parking"
            Price=" 10.000 - 15.000"
        /> */}


        </main>

        
        <Footer />

            
        </>
    )
}